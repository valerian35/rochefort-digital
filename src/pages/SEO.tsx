import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Search, TrendingUp, FileText, Link2, BarChart3, Target, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

export default function SEO() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Freelance SEO | Consultant Referencement Google';
  }, []);

  const services = [
    {
      icon: Search,
      title: 'Audit SEO complet',
      description: 'Analyse approfondie de votre site pour identifier tous les freins à votre visibilité sur Google.',
    },
    {
      icon: FileText,
      title: 'Optimisation on-page',
      description: 'Optimisation du contenu, des balises meta, de la structure et de l\'expérience utilisateur.',
    },
    {
      icon: Link2,
      title: 'Netlinking',
      description: 'Stratégie d\'acquisition de liens de qualité pour renforcer l\'autorité de votre site.',
    },
    {
      icon: TrendingUp,
      title: 'Stratégie de contenu',
      description: 'Création d\'un plan de contenu ciblé pour attirer du trafic qualifié sur le long terme.',
    },
    {
      icon: BarChart3,
      title: 'Suivi et reporting',
      description: 'Tableaux de bord et rapports mensuels pour suivre l\'évolution de vos positions.',
    },
    {
      icon: Target,
      title: 'SEO local',
      description: 'Optimisation pour les recherches locales et Google My Business pour capter les clients près de vous.',
    },
  ];

  const benefits = [
    { stat: 'Top 10', label: 'sur vos mots-clés stratégiques' },
    { stat: '24/7', label: 'visibilité continue sans pub' },
    { stat: 'ROI', label: 'mesurable et durable' },
  ];

  const pricing = [
    {
      name: 'Audit SEO',
      price: 'A partir de 500',
      description: 'Diagnostic complet de votre site',
      features: [
        'Analyse technique complete',
        'Audit du contenu',
        'Analyse des backlinks',
        'Etude de la concurrence',
        'Rapport detaille + recommandations',
        'Appel de restitution',
      ],
      oneTime: true,
    },
    {
      name: 'Accompagnement SEO',
      price: 'A partir de 800',
      description: 'Suivi mensuel pour des resultats durables',
      features: [
        'Optimisations mensuelles',
        'Strategie de contenu',
        'Netlinking qualitatif',
        'Suivi des positions',
        'Rapport mensuel',
        'Support prioritaire',
      ],
      popular: true,
      monthly: true,
    },
    {
      name: 'SEO + Contenu',
      price: 'Sur devis',
      description: 'Solution complete avec redaction',
      features: [
        'Tout l\'accompagnement SEO',
        'Redaction d\'articles optimises',
        'Optimisation des pages existantes',
        'Strategie de mots-cles',
        'Maillage interne avance',
        'Formation equipe',
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
            </svg>
          </div>

          <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
            <Link to="/" className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Retour a l'accueil
            </Link>

            <div className="max-w-4xl">
              <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">
                Consultant SEO Freelance
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal-800 leading-tight mb-6">
                Boostez votre visibilite sur{' '}
                <span className="text-sage-600">Google</span> et attirez plus de clients
              </h1>
              <p className="text-charcoal-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
                Expert SEO freelance, j'accompagne les entreprises dans leur stratégie de référencement naturel
                pour générer un trafic qualifié et durable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary">
                  Demander un audit gratuit
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#tarifs" className="btn-secondary">
                  Voir les prestations
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-sage-600 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.label} className="text-center">
                  <div className="font-serif text-4xl sm:text-5xl mb-2">{benefit.stat}</div>
                  <p className="text-sage-100 text-sm sm:text-base">{benefit.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">
                Mes prestations SEO
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-800 mb-6">
                Une approche complète du référencement
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.title} className="p-8 bg-cream-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-sage-600" />
                  </div>
                  <h3 className="font-serif text-xl text-charcoal-800 mb-3">{service.title}</h3>
                  <p className="text-charcoal-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-cream-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">
                  Pourquoi le SEO ?
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-800 mb-6">
                  Le référencement naturel, un investissement rentable
                </h2>
                <p className="text-charcoal-600 leading-relaxed mb-6">
                  Contrairement à la publicité payante qui s'arrête dès que vous coupez le budget,
                  le SEO génère un trafic gratuit et durable.
                </p>
                <ul className="space-y-3">
                  {['Trafic qualifié et ciblé', 'Crédibilité et confiance renforcées', 'ROI supérieur aux autres canaux', 'Avantage concurrentiel durable'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-sage-500 flex-shrink-0" />
                      <span className="text-charcoal-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Analyse SEO et performances"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-charcoal-500 text-sm">Trafic organique en croissance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tarifs" className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">Tarifs SEO</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-800 mb-6">
                Des formules adaptées à vos objectifs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricing.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative p-8 rounded-2xl transition-all duration-300 ${
                    plan.popular ? 'bg-sage-600 text-white shadow-xl scale-105' : 'bg-cream-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-charcoal-900 text-white text-sm rounded-full">
                      Recommande
                    </div>
                  )}
                  <h3 className={`font-serif text-2xl mb-2 ${plan.popular ? 'text-white' : 'text-charcoal-800'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.popular ? 'text-sage-100' : 'text-charcoal-500'}`}>
                    {plan.description}
                  </p>
                  <div className={`text-3xl font-serif mb-1 ${plan.popular ? 'text-white' : 'text-charcoal-800'}`}>
                    {plan.price}<span className="text-lg">EUR</span>
                  </div>
                  {plan.monthly && <p className={`text-sm mb-6 ${plan.popular ? 'text-sage-200' : 'text-charcoal-500'}`}>par mois</p>}
                  {plan.oneTime && <p className={`text-sm mb-6 ${plan.popular ? 'text-sage-200' : 'text-charcoal-500'}`}>prestation unique</p>}
                  {!plan.monthly && !plan.oneTime && <div className="mb-6" />}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-sage-200' : 'text-sage-500'}`} />
                        <span className={plan.popular ? 'text-sage-50' : 'text-charcoal-600'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`block text-center py-3 rounded-full font-medium transition-all ${
                      plan.popular ? 'bg-white text-sage-600 hover:bg-cream-100' : 'bg-sage-500 text-white hover:bg-sage-600'
                    }`}
                  >
                    Demander un devis
                  </a>
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
