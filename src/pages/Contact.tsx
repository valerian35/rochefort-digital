import { useState } from 'react';
import { User, Mail, Phone, MessageSquare, Briefcase, DollarSign, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    services: [] as string[],
    budget: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    { id: 'web', label: 'Sites Web' },
    { id: 'seo', label: 'Référencement SEO' },
    { id: 'dev', label: 'Développement Web' },
    { id: 'support', label: 'Accompagnement de A à Z' },
  ];

  const budgets = [
    { id: '<2k', label: 'Moins de 2000€' },
    { id: '2-5k', label: '2000€ - 5000€' },
    { id: '5-10k', label: '5000€ - 10000€' },
    { id: '>10k', label: 'Plus de 10000€' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter(s => s !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        services: [],
        budget: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 bg-gradient-to-br from-slate-600 to-slate-800">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Parlons de Votre Projet
            </h1>
            <p className="text-xl text-slate-200">
              Chaque grand projet commence par une conversation
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-4 sm:p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center gap-3 text-white mb-3 font-medium">
                  <User className="w-5 h-5" />
                  Nom complet
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                />
              </div>

              <div>
                <label className="flex items-center gap-3 text-white mb-3 font-medium">
                  <Mail className="w-5 h-5" />
                  Email
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                />
              </div>

              <div>
                <label className="flex items-center gap-3 text-white mb-3 font-medium">
                  <Phone className="w-5 h-5" />
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="06 12 34 56 78"
                  className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                />
              </div>

              <div>
                <label className="flex items-center gap-3 text-white mb-4 font-medium">
                  <Briefcase className="w-5 h-5" />
                  Services qui vous intéressent
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map(service => (
                    <label key={service.id} className="flex items-center gap-3 p-3 bg-slate-600/30 border border-slate-500 rounded-lg cursor-pointer hover:bg-slate-600/50 transition-colors">
                      <input
                        type="checkbox"
                        value={service.id}
                        checked={formData.services.includes(service.id)}
                        onChange={handleChange}
                        className="w-4 h-4 rounded accent-blue-400"
                      />
                      <span className="text-white">{service.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex items-center gap-3 text-white mb-3 font-medium">
                  <DollarSign className="w-5 h-5" />
                  Budget estimé
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                >
                  <option value="">Sélectionnez un budget</option>
                  {budgets.map(budget => (
                    <option key={budget.id} value={budget.id}>{budget.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center gap-3 text-white mb-3 font-medium">
                  <MessageSquare className="w-5 h-5" />
                  Message
                  <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet..."
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-8 py-4 bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-full transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Envoyer</span>
                  <span className="text-lg">→</span>
                </button>
                <button
                  type="button"
                  className="flex-1 px-8 py-4 bg-slate-600/30 border border-slate-500 hover:bg-slate-600/50 text-white font-medium rounded-full transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Prendre rendez-vous</span>
                </button>
              </div>

              {submitted && (
                <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-100 text-center">
                  Merci! Votre message a été envoyé avec succès.
                </div>
              )}
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
