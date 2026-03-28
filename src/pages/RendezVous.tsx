import { useState } from 'react';
import { User, Mail, Phone, MessageSquare, Briefcase, DollarSign, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import Header from '../components/Header';
import Footer from '../components/Footer';

declare global {
  interface Window {
    Calendly?: {
      showPopupWidget(url: string): void;
    };
  }
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function RendezVous() {
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
    { id: 'web', label: 'Création de site web' },
    { id: 'seo', label: 'Référencement SEO' },
    { id: 'refonte', label: 'Refonte de site' },
    { id: 'ecommerce', label: 'Site e-commerce' },
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('contact_requests')
        .insert([{
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          services: formData.services.join(', '),
          budget: formData.budget,
          message: formData.message,
        }]);

      if (!error) {
        setSubmitted(true);
        setTimeout(() => {
          if (window.Calendly) {
            window.Calendly.showPopupWidget('https://calendly.com/contact-rochefort-digital/30min');
          }
        }, 500);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-sage-50 to-cream-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
              <path d="M0,300 Q250,200 500,300 T1000,300" fill="none" stroke="currentColor" strokeWidth="1" className="text-sage-300" />
              <path d="M0,350 Q250,250 500,350 T1000,350" fill="none" stroke="currentColor" strokeWidth="1" className="text-sage-200" />
            </svg>
          </div>

          <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour a l'accueil
            </button>

            <div className="max-w-4xl">
              <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">
                Parlons de votre projet
              </p>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-800 leading-tight mb-6">
                Transformons votre{' '}
                <span className="text-sage-600">vision en réalité</span>
              </h1>
              <p className="text-charcoal-600 text-lg sm:text-xl leading-relaxed max-w-2xl">
                Remplissez ce formulaire pour que nous commencions à discuter de votre projet. Je vous répondrai rapidement avec des propositions adaptées à vos besoins.
              </p>
            </div>
          </div>
        </section>

        <section id="contact-form" className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="flex items-center gap-3 text-charcoal-800 mb-3 font-medium">
                      <User className="w-5 h-5 text-sage-600" />
                      Nom complet
                      <span className="text-sage-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      required
                      className="w-full px-4 py-3 bg-cream-50 border border-sage-200 rounded-lg text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-3 text-charcoal-800 mb-3 font-medium">
                      <Mail className="w-5 h-5 text-sage-600" />
                      Email
                      <span className="text-sage-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jean@exemple.com"
                      required
                      className="w-full px-4 py-3 bg-cream-50 border border-sage-200 rounded-lg text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-3 text-charcoal-800 mb-3 font-medium">
                    <Phone className="w-5 h-5 text-sage-600" />
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-3 bg-cream-50 border border-sage-200 rounded-lg text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-colors"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-3 text-charcoal-800 mb-4 font-medium">
                    <Briefcase className="w-5 h-5 text-sage-600" />
                    Services qui vous intéressent
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map(service => (
                      <label key={service.id} className="flex items-center gap-3 p-4 bg-cream-50 border border-sage-200 rounded-lg cursor-pointer hover:border-sage-300 hover:bg-sage-50/30 transition-colors group">
                        <input
                          type="checkbox"
                          value={service.id}
                          checked={formData.services.includes(service.id)}
                          onChange={handleChange}
                          className="w-5 h-5 rounded border-sage-300 text-sage-600 focus:ring-sage-500"
                        />
                        <span className="text-charcoal-700">{service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-3 text-charcoal-800 mb-3 font-medium">
                    <DollarSign className="w-5 h-5 text-sage-600" />
                    Budget estimé
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cream-50 border border-sage-200 rounded-lg text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-colors"
                  >
                    <option value="">Sélectionnez un budget</option>
                    {budgets.map(budget => (
                      <option key={budget.id} value={budget.id}>{budget.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-3 text-charcoal-800 mb-3 font-medium">
                    <MessageSquare className="w-5 h-5 text-sage-600" />
                    Parlez-moi de votre projet
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, vos objectifs et vos attentes..."
                    rows={6}
                    className="w-full px-4 py-3 bg-cream-50 border border-sage-200 rounded-lg text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-colors resize-none"
                  />
                </div>

                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-300 rounded-lg flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-green-900 font-medium">Message envoyé avec succès!</p>
                      <p className="text-green-800 text-sm">Je vous recontacterai très rapidement.</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  <span>Envoyer ma demande</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
