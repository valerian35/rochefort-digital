import { Sparkles, ArrowRight } from 'lucide-react';

const scrollToRendezVous = () => {
  const element = document.getElementById('rendez-vous-form');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

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
            Notre approche à Rennes
          </p>

          <h2 className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl text-charcoal-800 leading-tight mb-8">
            Créer des sites web qui génèrent des résultats —{' '}
            <span className="text-charcoal-400 italic">
              stratégie digitale complète pour votre croissance.
            </span>
          </h2>

          <p className="text-charcoal-600 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            En tant que développeur web et expert SEO à Rennes, je combine expertise technique et stratégie marketing pour créer des sites qui convertissent. Chaque projet reçoit une approche personnalisée pour maximiser votre visibilité Google et vos résultats business.
          </p>

          <button
            onClick={scrollToRendezVous}
            className="btn-primary cursor-pointer"
          >
            Prendre un rendez-vous
            <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
          </button>
        </div>

        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              number: '01',
              title: 'Web + SEO combinés',
              description: 'Développeur web et spécialiste SEO Rennes : créer des sites modernes et optimisés Google depuis le départ.',
            },
            {
              number: '02',
              title: 'Résultats mesurables',
              description: 'Chaque action vise un objectif : augmenter votre trafic, vos demandes de devis et votre chiffre d\'affaires.',
            },
            {
              number: '03',
              title: 'Accompagnement complet',
              description: 'De la création à la mise en ligne en passant par le suivi SEO : une stratégie digitale globale pour votre réussite.',
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
