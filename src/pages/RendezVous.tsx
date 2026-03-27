import { useState, useEffect } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RendezVous() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    sector: '',
    budget: '',
    timeline: '',
    description: '',
  });

  const [openDropdowns, setOpenDropdowns] = useState({
    sector: false,
    budget: false,
    timeline: false,
  });

  const sectors = [
    'Artisan',
    'Commerce',
    'Service',
    'E-commerce',
    'Restaurant',
    'Professionnel libéral',
    'Autre',
  ];

  const budgets = [
    { value: '1-3k', label: '1 000 - 3 000€' },
    { value: '3-5k', label: '3 000 - 5 000€' },
    { value: '5-10k', label: '5 000 - 10 000€' },
    { value: '10k+', label: '10 000€+' },
  ];

  const timelines = [
    { value: 'urgent', label: 'Urgent (1-2 mois)' },
    { value: 'normal', label: 'Normal (3-4 mois)' },
    { value: 'flexible', label: 'Flexible (5+ mois)' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectOption = (field: 'sector' | 'budget' | 'timeline', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    setOpenDropdowns(prev => ({
      ...prev,
      [field]: false,
    }));
  };

  const toggleDropdown = (field: 'sector' | 'budget' | 'timeline') => {
    setOpenDropdowns(prev => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-sage-50">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal-800 mb-8 leading-tight">
                Prêt à transformer votre site en générateur de clients?
              </h1>
              <p className="text-xl text-charcoal-600 leading-relaxed">
                30 minutes gratuites pour découvrir comment doubler votre acquisition client grâce à un site premium et une stratégie SEO qui fonctionne. Sans engagement, juste du concret.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 sm:p-12 border border-sage-200 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="relative">
                  <label className="block text-charcoal-800 text-sm font-medium mb-3">
                    Secteur d'activité
                  </label>
                  <button
                    type="button"
                    onClick={() => toggleDropdown('sector')}
                    className="w-full px-5 py-3 bg-cream-50 border-2 border-sage-200 rounded-xl text-charcoal-800 text-left focus:outline-none focus:border-sage-500 transition-colors flex items-center justify-between hover:border-sage-300"
                  >
                    <span className={formData.sector ? 'text-charcoal-800' : 'text-charcoal-400'}>
                      {formData.sector || 'Sélectionner...'}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdowns.sector ? 'rotate-180' : ''}`} />
                  </button>

                  {openDropdowns.sector && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-sage-200 rounded-xl shadow-xl z-10">
                      <div className="py-2">
                        {sectors.map((sector) => (
                          <button
                            key={sector}
                            type="button"
                            onClick={() => handleSelectOption('sector', sector)}
                            className={`w-full px-5 py-3 text-left transition-colors ${
                              formData.sector === sector
                                ? 'bg-sage-500 text-white'
                                : 'text-charcoal-800 hover:bg-sage-50'
                            }`}
                          >
                            {sector}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-charcoal-800 text-sm font-medium mb-3">
                    Budget envisagé
                  </label>
                  <button
                    type="button"
                    onClick={() => toggleDropdown('budget')}
                    className="w-full px-5 py-3 bg-cream-50 border-2 border-sage-200 rounded-xl text-charcoal-800 text-left focus:outline-none focus:border-sage-500 transition-colors flex items-center justify-between hover:border-sage-300"
                  >
                    <span className={formData.budget ? 'text-charcoal-800' : 'text-charcoal-400'}>
                      {budgets.find(b => b.value === formData.budget)?.label || 'Sélectionner...'}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdowns.budget ? 'rotate-180' : ''}`} />
                  </button>

                  {openDropdowns.budget && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-sage-200 rounded-xl shadow-xl z-10">
                      <div className="py-2">
                        {budgets.map((budget) => (
                          <button
                            key={budget.value}
                            type="button"
                            onClick={() => handleSelectOption('budget', budget.value)}
                            className={`w-full px-5 py-3 text-left transition-colors ${
                              formData.budget === budget.value
                                ? 'bg-sage-500 text-white'
                                : 'text-charcoal-800 hover:bg-sage-50'
                            }`}
                          >
                            {budget.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-charcoal-800 text-sm font-medium mb-3">
                    Timeline souhaitée
                  </label>
                  <button
                    type="button"
                    onClick={() => toggleDropdown('timeline')}
                    className="w-full px-5 py-3 bg-cream-50 border-2 border-sage-200 rounded-xl text-charcoal-800 text-left focus:outline-none focus:border-sage-500 transition-colors flex items-center justify-between hover:border-sage-300"
                  >
                    <span className={formData.timeline ? 'text-charcoal-800' : 'text-charcoal-400'}>
                      {timelines.find(t => t.value === formData.timeline)?.label || 'Sélectionner...'}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdowns.timeline ? 'rotate-180' : ''}`} />
                  </button>

                  {openDropdowns.timeline && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-sage-200 rounded-xl shadow-xl z-10">
                      <div className="py-2">
                        {timelines.map((timeline) => (
                          <button
                            key={timeline.value}
                            type="button"
                            onClick={() => handleSelectOption('timeline', timeline.value)}
                            className={`w-full px-5 py-3 text-left transition-colors ${
                              formData.timeline === timeline.value
                                ? 'bg-sage-500 text-white'
                                : 'text-charcoal-800 hover:bg-sage-50'
                            }`}
                          >
                            {timeline.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-charcoal-800 text-sm font-medium mb-3">
                  Décrivez votre projet en quelques mots (optionnel)
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Parlez-moi de votre projet..."
                  rows={5}
                  className="w-full px-5 py-3 bg-cream-50 border border-sage-200 rounded-xl text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:border-sage-500 transition-colors resize-none"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-sage-500 text-white font-semibold rounded-full hover:bg-sage-600 transition-all hover:shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Prendre rendez-vous
                </button>
              </div>
            </form>

            <p className="text-center text-charcoal-600 text-sm mt-8">
              Vous recevrez un email de confirmation avec les détails du rendez-vous.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
