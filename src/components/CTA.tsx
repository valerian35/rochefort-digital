import { useState } from 'react';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
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
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                  type="email"
                  placeholder="Votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-5 py-4 rounded-full bg-white text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="url"
                  placeholder="URL de votre site (optionnel)"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="flex-1 px-5 py-4 rounded-full bg-white text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-charcoal-900 text-white font-semibold rounded-full transition-all duration-300 hover:bg-charcoal-800 hover:shadow-xl disabled:opacity-70 flex items-center justify-center gap-2"
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
              </div>
              <p className="text-white/60 text-sm mt-4">
                Sans engagement. Réponse sous 24h.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
