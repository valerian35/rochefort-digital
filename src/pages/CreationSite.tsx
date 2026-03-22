import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Code, Palette, Smartphone, Zap, Search, Shield, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

export default function CreationSite() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Creation de Site Internet | Developpeur Web Freelance';
  }, []);

  const features = [
    {
      icon: Palette,
      title: 'Design sur mesure',
      description: 'Un design unique et moderne qui reflète votre identité de marque et séduit vos visiteurs.',
    },
    {
      icon: Smartphone,
      title: 'Responsive mobile',
      description: 'Votre site s\'adapte parfaitement à tous les écrans : mobile, tablette et desktop.',
    },
    {
      icon: Zap,
      title: 'Performance optimale',
      description: 'Temps de chargement ultra-rapide pour une expérience utilisateur fluide.',
    },
    {
      icon: Search,
      title: 'Optimisé SEO',
      description: 'Structure technique optimisée pour le référencement naturel dès la conception.',
    },
    {
      icon: Code,
      title: 'Code propre',
      description: 'Développement avec les technologies modernes pour un site évolutif et maintenable.',
    },
    {
      icon: Shield,
      title: 'Sécurité renforcée',
      description: 'Protection SSL, mises à jour régulières et bonnes pratiques de sécurité.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Découverte',
      description: 'Analyse de vos besoins, objectifs et de votre marché pour définir la stratégie.',
    },
    {
      step: '02',
      title: 'Conception',
      description: 'Création des maquettes et de l\'architecture du site pour validation.',
    },
    {
      step: '03',
      title: 'Développement',
      description: 'Intégration et développement avec les meilleures technologies web.',
    },
    {
      step: '04',
      title: 'Lancement',
      description: 'Tests, optimisations et mise en ligne de votre nouveau site.',
    },
  ];

  const pricing = [
    {
      name: 'Site Vitrine',
      price: 'À partir de 1 500',
      description: 'Idéal pour présenter votre activité',
      features: [
        'Design personnalisé',
        '5 pages',
        'Formulaire de contact',
        'Optimisation SEO de base',
        'Responsive mobile',
        'Hébergement 1 an inclus',
      ],
    },
    {
      name: 'Site Premium',
      price: 'À partir de 3 000',
      description: 'Pour une présence en ligne complète',
      features: [
        'Design sur mesure',
        '10+ pages',
        'Blog intégré',
        'Optimisation SEO avancée',
        'Animations modernes',
        'Formation à la gestion',
        'Support 6 mois',
      ],
      popular: true,
    },
    {
      name: 'Sur Mesure',
      price: 'Sur devis',
      description: 'Projets complexes et spécifiques',
      features: [
        'Fonctionnalités custom',
        'Intégrations API',
        'Espace client/admin',
        'Accompagnement complet',
        'Maintenance incluse',
        'Support prioritaire',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-sage-50 to-cream-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
              <path d="M0,300 Q250,200 500,300 T1000,300" fill="none" stroke="currentColor" strokeWidth="1" className="text-sage-300" />
              <path d="M0,350 Q250,250 500,350 T1000,350" fill="none" stroke="currentColor" strokeWidth="1" className="text-sage-200" />
            </svg>
          </div>

          <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour a l'accueil
            </Link>

            <div className="max-w-4xl">
              <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">
                Creation de site internet
              </p>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-800 leading-tight mb-6">
                Un site web professionnel qui{' '}
                <span className="text-sage-600">convertit vos visiteurs</span> en clients
              </h1>
              <p className="text-charcoal-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
                Je conçois des sites internet sur mesure, modernes et optimisés pour le référencement.
                Un investissement stratégique pour développer votre activité en ligne.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary">
                  Demander un devis gratuit
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#tarifs" className="btn-secondary">
                  Voir les tarifs
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-cream-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
              <div>
                <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">
                  Pourquoi me choisir
                </p>
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-charcoal-800 mb-6">
                  Un site internet conçu pour performer
                </h2>
                <p className="text-charcoal-600 text-lg leading-relaxed mb-8">
                  Chaque site que je crée est pensé pour atteindre vos objectifs business :
                  visibilité, crédibilité et conversion.
                </p>
              </div>
              <div>
                <img src="https://i.ibb.co/1tv6T5sm/Capture-d-cran-2026-03-22-171026.png" alt="Site web performant" className="rounded-2xl shadow-xl" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 sm:p-8 bg-white rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-sage-600" />
                  </div>
                  <h3 className="font-serif text-xl text-charcoal-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-charcoal-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-charcoal-900 text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sage-400 font-medium tracking-widest uppercase text-sm mb-4">
                Mon processus
              </p>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
                Comment je crée votre site
              </h2>
              <p className="text-charcoal-300 text-lg">
                Une méthodologie éprouvée pour garantir un résultat à la hauteur de vos attentes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {process.map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="text-sage-400/30 font-serif text-5xl sm:text-6xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                  <p className="text-charcoal-400 leading-relaxed">
                    {item.description}
                  </p>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-12 right-0 w-1/2 h-px bg-charcoal-700" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tarifs" className="section-padding bg-cream-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">
                Tarifs
              </p>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-charcoal-800 mb-6">
                Des offres adaptées à vos besoins
              </h2>
              <p className="text-charcoal-600 text-lg">
                Chaque projet est unique. Ces tarifs sont indicatifs et peuvent être ajustés
                selon vos besoins spécifiques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricing.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative p-8 rounded-2xl transition-all duration-300 ${
                    plan.popular
                      ? 'bg-sage-600 text-white shadow-xl scale-105'
                      : 'bg-white shadow-md hover:shadow-lg'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-charcoal-900 text-white text-sm rounded-full">
                      Populaire
                    </div>
                  )}
                  <h3 className={`font-serif text-2xl mb-2 ${plan.popular ? 'text-white' : 'text-charcoal-800'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.popular ? 'text-sage-100' : 'text-charcoal-500'}`}>
                    {plan.description}
                  </p>
                  <div className={`text-3xl font-serif mb-6 ${plan.popular ? 'text-white' : 'text-charcoal-800'}`}>
                    {plan.price}<span className="text-lg">EUR</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-sage-200' : 'text-sage-500'}`} />
                        <span className={plan.popular ? 'text-sage-50' : 'text-charcoal-600'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`block text-center py-3 rounded-full font-medium transition-all ${
                      plan.popular
                        ? 'bg-white text-sage-600 hover:bg-cream-100'
                        : 'bg-sage-500 text-white hover:bg-sage-600'
                    }`}
                  >
                    Demander un devis
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">
                FAQ
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-800">
                Questions fréquentes
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: 'Combien de temps faut-il pour créer un site internet ?',
                  answer: 'Le délai moyen est de 4 à 8 semaines selon la complexité du projet. Un site vitrine simple peut être livré en 3 semaines, tandis qu\'un projet plus ambitieux peut nécessiter 2 à 3 mois.',
                },
                {
                  question: 'Puis-je modifier mon site moi-même après livraison ?',
                  answer: 'Oui, je vous fournis une formation complète pour gérer votre contenu en autonomie. Vous pourrez modifier textes, images et ajouter de nouvelles pages facilement.',
                },
                {
                  question: 'Le site sera-t-il optimisé pour Google ?',
                  answer: 'Absolument. L\'optimisation SEO technique est incluse dans chaque projet : structure HTML sémantique, balises meta, vitesse de chargement, et toutes les bonnes pratiques pour un bon référencement.',
                },
                {
                  question: 'Proposez-vous la maintenance du site ?',
                  answer: 'Oui, je propose des forfaits de maintenance mensuelle incluant les mises à jour de sécurité, sauvegardes, et modifications mineures. Les tarifs varient selon vos besoins.',
                },
              ].map((faq) => (
                <div
                  key={faq.question}
                  className="p-6 bg-cream-50 rounded-xl"
                >
                  <h3 className="font-serif text-lg text-charcoal-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-charcoal-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
