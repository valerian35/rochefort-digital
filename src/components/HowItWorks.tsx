import { MessageCircle, Lightbulb, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Échange',
    subtitle: 'Premier contact',
    description:
      'On discute de votre projet, vos objectifs et vos contraintes. Je vous propose une première analyse gratuite.',
  },
  {
    icon: Lightbulb,
    title: 'Stratégie',
    subtitle: 'Plan d\'action',
    description:
      'Je définis une stratégie sur mesure combinant développement web et SEO pour maximiser vos résultats.',
  },
  {
    icon: Rocket,
    title: 'Réalisation',
    subtitle: 'Mise en œuvre',
    description:
      'Développement de votre site avec une attention particulière à la performance et au référencement naturel.',
  },
  {
    icon: TrendingUp,
    title: 'Croissance',
    subtitle: 'Suivi & optimisation',
    description:
      'Analyse des performances, ajustements SEO et accompagnement continu pour une croissance durable.',
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="section-padding bg-cream-50 relative overflow-hidden">
      <div className="decorative-curves text-sage-500">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,200 Q400,100 800,300 T1000,200" />
          <path d="M0,400 Q300,200 600,400 T1000,300" />
          <path d="M0,600 Q500,400 800,600 T1000,500" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-800 mb-6">
            <span className="text-charcoal-800">Comment</span>{' '}
            <span className="text-sage-500 italic">ça marche</span>
          </h2>

          <p className="text-charcoal-600 text-lg leading-relaxed max-w-2xl">
            Commencer n'a pas à être compliqué. Mon processus est simple, clair et conçu pour avancer à votre rythme — du premier contact aux résultats concrets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-sage-100 flex items-center justify-center group-hover:bg-sage-500 transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-sage-600 group-hover:text-white transition-colors duration-300" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-20 w-full h-px bg-sage-200" />
                )}
              </div>

              <h3 className="font-serif text-3xl text-charcoal-800 mb-1">
                {step.title}
              </h3>
              <p className="text-sage-600 font-medium text-sm mb-4">
                {step.subtitle}
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
