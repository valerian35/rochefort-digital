import { Sparkles, ArrowRight } from 'lucide-react';

export default function Philosophy() {
  return (
    <section id="about" className="section-padding bg-cream-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-sage-500" />
            </div>
          </div>

          <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-8">
            Ma philosophie
          </p>

          <h2 className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl text-charcoal-800 leading-tight mb-8">
            Je ne crée pas simplement des sites —{' '}
            <span className="text-charcoal-400 italic">
              je construis des outils de croissance qui génèrent des résultats durables.
            </span>
          </h2>

          <p className="text-charcoal-600 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            En combinant expertise technique et stratégie SEO, je conçois des solutions web qui ne se contentent pas d'exister, mais qui attirent, engagent et convertissent vos visiteurs en clients.
          </p>

          <a
            href="/seo-referencement"
            className="btn-primary"
          >
            Prendre un rendez-vous
            <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
          </a>
        </div>

        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              number: '01',
              title: 'Double expertise',
              description: 'Développeur web et expert SEO : une compétence rare pour des sites vraiment performants.',
            },
            {
              number: '02',
              title: 'Orientation résultats',
              description: 'Chaque décision est guidée par un objectif : générer du trafic et des conversions.',
            },
            {
              number: '03',
              title: 'Accompagnement complet',
              description: 'De la conception à la mise en ligne, puis au suivi SEO, je vous accompagne à chaque étape.',
            },
          ].map((item) => (
            <div
              key={item.number}
              className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <span className="text-sage-400 font-serif text-4xl">{item.number}</span>
              <h3 className="font-serif text-xl text-charcoal-800 mt-4 mb-3">
                {item.title}
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
