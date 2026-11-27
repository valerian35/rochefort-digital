import { CheckCircle } from 'lucide-react';
import ContactForm from './ContactForm';

export default function CTA() {
  return (
    <section id="rendez-vous-form" className="section-padding bg-gradient-to-br from-sage-500 via-sage-400 to-sage-300 relative overflow-hidden">
      <div className="decorative-curves text-white">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,300 Q250,100 500,300 T1000,200" />
          <path d="M0,500 Q350,300 700,500 T1000,400" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
            Parlons de votre présence digitale
          </h2>

          <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Vous avez un projet web ou des questions sur le SEO ? Je vous propose une consultation gratuite pour comprendre vos besoins et vous proposer un plan concret et réaliste.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8">
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {[
                'Diagnostic de votre situation actuelle',
                'Points clés pour progresser',
                'Plan d\'action adapté à vos besoins',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-white/80 flex-shrink-0" />
                  <span className="text-sm text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
