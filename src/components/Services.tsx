import { Link } from 'react-router-dom';
import { Code, Search, RefreshCw, ShoppingCart, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Création Site Internet',
    subtitle: 'Sur Mesure',
    description:
      'Sites vitrines, applications web ou plateformes personnalisées. Un développement adapté à vos objectifs business.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/creation-site-internet',
  },
  {
    icon: Search,
    title: 'Référencement',
    subtitle: 'SEO',
    description:
      'Audit complet, optimisation technique et stratégie de contenu pour dominer les résultats Google.',
    image: 'https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/seo-referencement',
  },
  {
    icon: RefreshCw,
    title: 'Refonte',
    subtitle: 'Site Web',
    description:
      'Modernisez votre site existant avec un design actuel et des performances SEO optimisées.',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/refonte-site',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    subtitle: 'Boutique en ligne',
    description:
      'Lancez votre boutique en ligne avec un site performant, sécurisé et optimisé pour la conversion.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/e-commerce',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">
            Mes services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-800 mb-6">
            <span className="text-charcoal-400">Le chemin n'est jamais le même,</span>
            <br />
            mais il y a des étapes claires.
          </h2>
          <p className="text-charcoal-600 text-lg max-w-2xl mx-auto">
            Chaque projet est unique. Voici comment je vous accompagne pour développer votre présence en ligne.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-sage-50 aspect-[3/4] card-hover block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/40 to-transparent" />
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white leading-tight">
                    {service.title}
                    <br />
                    <span className="text-white/80">{service.subtitle}</span>
                  </h3>
                </div>

                <div>
                  <p className="text-white/80 text-sm leading-relaxed mb-4 transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sage-400" />
                    <span className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      En savoir plus <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
