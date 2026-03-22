import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Marie L.',
    role: 'Fondatrice, Studio Design',
    content:
      'Après des années de site invisible sur Google, je me suis tournée vers ce freelance. En quelques mois, mon trafic a triplé et les demandes de devis affluent.',
  },
  {
    name: 'Thomas B.',
    role: 'Gérant, PME Industrielle',
    content:
      'Un site moderne et enfin visible. Le combo développement + SEO a fait toute la différence. Je recommande vivement.',
  },
];

export default function Stories() {
  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">
              Des vrais resultats. Des vrais clients.
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-800 mb-6 leading-tight">
              Retrouver la croissance
              <br />
              <span className="text-charcoal-400">après la stagnation.</span>
            </h2>

            <p className="text-charcoal-600 text-lg leading-relaxed mb-8">
              Après des années de site web invisible et de stratégies inefficaces, mes clients ont fait le choix d'un accompagnement qui allie technique et stratégie. À travers des actions concrètes et mesurées, ils ont retrouvé une visibilité durable et une croissance réelle.
            </p>

            <Link
              to="/audit-gratuit"
              className="btn-primary"
            >
              Audit gratuit
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
            </Link>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://i.ibb.co/6Rn4vxF8/Chat-GPT-Image-22-mars-2026-10-37-54.png"
                  alt="E-commerce boutique en ligne"
                  className="w-full h-64 object-cover rounded-2xl"
                  loading="lazy"
                />
                <div className="bg-sage-50 p-6 rounded-2xl">
                  <Quote className="w-8 h-8 text-sage-400 mb-4" />
                  <p className="text-charcoal-700 text-sm italic leading-relaxed">
                    {testimonials[0].content}
                  </p>
                  <div className="mt-4">
                    <p className="font-medium text-charcoal-800 text-sm">
                      {testimonials[0].name}
                    </p>
                    <p className="text-charcoal-500 text-xs">
                      {testimonials[0].role}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="bg-cream-100 p-6 rounded-2xl">
                  <Quote className="w-8 h-8 text-sage-400 mb-4" />
                  <p className="text-charcoal-700 text-sm italic leading-relaxed">
                    {testimonials[1].content}
                  </p>
                  <div className="mt-4">
                    <p className="font-medium text-charcoal-800 text-sm">
                      {testimonials[1].name}
                    </p>
                    <p className="text-charcoal-500 text-xs">
                      {testimonials[1].role}
                    </p>
                  </div>
                </div>
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Resultats business"
                  className="w-full h-56 object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
