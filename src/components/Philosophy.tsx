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
            Mon approche
          </p>

          <h2 className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl text-charcoal-800 leading-tight mb-8">
            Créer des sites qui convertissent —{' '}
            <span className="text-charcoal-400 italic">
              un interlocuteur unique, un accompagnement sur mesure.
            </span>
          </h2>

          <p className="text-charcoal-600 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            Je suis freelance développeur web à Rennes. Vous avez un unique interlocuteur — pas de meeting sans fin, pas de communication filtrée. Je crée des sites performants et optimisés SEO pour les PME et commerces. Disponible, réactif, et engagé pour vos résultats.
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
              title: 'Création Web + SEO',
              description: 'Je crée des sites modernes et optimisés dès le départ. Pas d\'ajustements après : du planning à la mise en ligne, tout est pensé pour convertir et ranker sur Google.',
            },
            {
              number: '02',
              title: 'Suivi réactif',
              description: 'Pas de délai de réponse frustrant. Vous m\'envoyez un message, je vous réponds vite. Un vrai partenaire disponible pour vos projets et vos questions.',
            },
            {
              number: '03',
              title: 'Résultats concrets',
              description: 'Chaque action a un objectif : générer du trafic qualifié, augmenter vos leads, booster votre chiffre d\'affaires. Vous voyez les résultats, pas juste des rapports.',
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
