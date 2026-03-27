import { useState } from 'react';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

export default function CTA() {
  const [sector, setSector] = useState('');
  const [timeline, setTimeline] = useState('');
  const [description, setDescription] = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectorOptions = [
    'Artisanat',
    'Commerce',
    'Conseil',
    'E-commerce',
    'Éducation',
    'Événementiel',
    'Hôtellerie & Restauration',
    'Immobilier',
    'Industrie',
    'IT & Technologie',
    'Marketing & Agence',
    'Santé & Bien-être',
    'Services',
    'Transport & Logistique',
    'Tourisme',
    'Autre',
  ];

  const serviceOptions = [
    { id: 'creation', label: 'Création Site Internet' },
    { id: 'seo', label: 'Référencement (SEO)' },
    { id: 'refonte', label: 'Refonte Site Web' },
    { id: 'ecommerce', label: 'E-commerce' },
  ];

  const toggleService = (serviceId: string) => {
    setServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xojpvolj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sector,
          services: services.join(', '),
          timeline,
          description,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setSector('');
          setServices([]);
          setTimeline('');
          setDescription('');
          setIsSubmitted(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-sage-500 via-sage-400 to-sage-300 relative overflow-hidden">
      <div className="decorative-curves text-white">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,300 Q250,100 500,300 T1000,200" />
          <path d="M0,500 Q350,300 700,500 T1000,400" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
            Prendre un rendez-vous
          </h2>

          <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Découvrez pourquoi votre site ne performe pas et obtenez un plan d'action concret pour améliorer votre visibilité sur Google.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8">
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {[
                'Analyse technique complète',
                'Points bloquants identifiés',
                'Recommandations concrètes',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-white/80 flex-shrink-0" />
                  <span className="text-sm text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {isSubmitted ? (
            <div className="bg-white rounded-2xl p-8 text-center animate-scale-in">
              <CheckCircle className="w-16 h-16 text-sage-500 mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-charcoal-800 mb-2">
                Merci pour votre demande !
              </h3>
              <p className="text-charcoal-600">
                Je vous contacte sous 24h avec votre audit personnalise.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="space-y-4">
                <div>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-white text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <option value="">Sélectionnez votre secteur d'activité</option>
                    {sectorOptions.map((sector) => (
                      <option key={sector} value={sector}>
                        {sector}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white mb-3 text-sm font-medium">Services qui vous intéressent</label>
                  <div className="space-y-3">
                    {serviceOptions.map((service) => (
                      <label key={service.id} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={services.includes(service.id)}
                          onChange={() => toggleService(service.id)}
                          className="w-5 h-5 rounded-lg bg-white accent-sage-500 cursor-pointer"
                        />
                        <span className="text-white group-hover:text-white/80 transition-colors">{service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-white text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <option value="">Sélectionnez votre timeline souhaitée</option>
                    <option value="urgent">Urgent (dans les 2 semaines)</option>
                    <option value="soon">Bientôt (1-2 mois)</option>
                    <option value="flexible">Flexible (3+ mois)</option>
                    <option value="exploration">En exploration (pas de deadline)</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Décrivez votre projet"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-5 py-4 rounded-2xl bg-white text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none h-32"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 px-8 py-4 bg-charcoal-900 text-white font-semibold rounded-full transition-all duration-300 hover:bg-charcoal-800 hover:shadow-xl disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Envoi...
                  </>
                ) : (
                  <>
                    Prendre rendez-vous
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
              <p className="text-white/60 text-sm mt-4 text-center">
                Sans engagement. Réponse sous 24h.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
