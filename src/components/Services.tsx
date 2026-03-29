import { Link } from 'react-router-dom';
import { Code, Search, RefreshCw, ShoppingCart, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Création Site Internet',
    subtitle: 'Sur Mesure',
    description:
      'Je conçois des sites vitrines et e-commerce performants. Designs modernes et optimisés conversion pour générer des clients et augmenter vos ventes.',
    image: 'https://i.ibb.co/1tv6T5sm/Capture-d-cran-2026-03-22-171026.png',
    link: '/creation-site-internet',
  },
  {
    icon: Search,
    title: 'Référencement',
    subtitle: 'SEO',
    description:
      'Audit SEO complet, optimisation technique et stratégie de contenu. Dominez Google avec un référencement professionnel et durable à Rennes.',
    image: 'https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/seo-referencement',
  },
  {
    icon: RefreshCw,
    title: 'Refonte',
    subtitle: 'Site Web',
    description:
      'Je modernise votre site avec un design actuel et une optimisation SEO complète. Boostez votre visibilité Google et vos résultats commerciaux.',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/refonte-site',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    subtitle: 'Boutique en ligne',
    description:
      'Créez votre boutique en ligne performante et sécurisée. Je vous accompagne pour développer votre activité et trouver des clients en ligne.',
    image: 'https://i.ibb.co/Cs0NfZG0/Capture-d-cran-2026-03-22-170419.png',
    link: '/e-commerce',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white pt-32">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">
            Mes services à Rennes
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-800 mb-6">
            <span className="text-charcoal-400">Tout ce qu'il vous faut pour réussir en ligne,</span>
            <br />
            de la création du site au suivi SEO.
          </h2>
          <p className="text-charcoal-600 text-lg max-w-2xl mx-auto">
            Je vous accompagne personnellement sur chaque projet. Création web, référencement SEO et conseil digital — expertise technique pour des résultats mesurables et durables.
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
                  alt={`${service.title} - agence web Rennes - ${service.subtitle}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/99 via-charcoal-950/85 to-charcoal-900/40 transition-all duration-500 group-hover:via-charcoal-950/90 group-hover:from-black/99" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/25 transition-all duration-500" />
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white leading-tight transition-all duration-300 group-hover:text-white">
                    {service.title}
                    <br />
                    <span className="text-white/80 group-hover:text-white/80">{service.subtitle}</span>
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
