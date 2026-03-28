import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Check, ShoppingCart, CreditCard, Package, BarChart3, Search, Shield, Truck, Users, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

const scrollToRendezVous = () => {
  const element = document.getElementById('rendez-vous-form');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Ecommerce() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Creation Site E-commerce | Boutique en Ligne SEO';
  }, []);

  useEffect(() => {
    const scrollTo = searchParams.get('scroll');
    if (scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [searchParams]);

  const features = [
    { icon: ShoppingCart, title: 'Catalogue produits', description: 'Gestion intuitive de vos produits avec catégories, variantes, stocks et promotions.' },
    { icon: CreditCard, title: 'Paiement sécurisé', description: 'Intégration des solutions de paiement (Stripe, PayPal, Apple Pay, Google Pay) avec sécurité SSL.' },
    { icon: Truck, title: 'Gestion livraison', description: 'Configuration des transporteurs, zones de livraison et calcul automatique des frais.' },
    { icon: Users, title: 'Espace client', description: 'Comptes clients avec historique de commandes, wishlist et adresses enregistrées.' },
    { icon: BarChart3, title: 'Tableau de bord', description: 'Statistiques de vente, suivi des commandes et indicateurs de performance.' },
    { icon: Search, title: 'SEO e-commerce', description: 'Optimisation des fiches produits et catégories pour le référencement naturel.' },
  ];

  const stats = [
    { value: '2.8 Mds EUR', label: 'ventes e-commerce en France (2025)' },
    { value: '42M', label: 'acheteurs en ligne' },
    { value: 'En forte croissance', label: 'marché e-commerce français' },
  ];

  const pricing = [
    {
      name: 'Starter',
      price: 'Sur devis',
      description: 'Pour démarrer votre activité en ligne',
      features: ['Jusqu\'à 100 produits', 'Design personnalisé', 'Paiement sécurisé', 'Gestion des commandes', 'Optimisation SEO de base'],
    },
    {
      name: 'Business',
      price: 'Sur devis',
      description: 'Pour une boutique complète',
      features: ['Produits illimités', 'Design premium', 'Multi-transporteurs', 'Gestion des promotions', 'SEO avancé', 'Intégrations marketing', 'Support 3 mois'],
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-sage-50 to-cream-50 relative overflow-hidden">
          <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
            <Link to="/" className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Retour a l'accueil
            </Link>

            <div className="max-w-4xl">
              <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">
                Creation site e-commerce
              </p>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-800 leading-tight mb-6">
                Lancez votre boutique en ligne{' '}
                <span className="text-sage-600">et vendez 24h/24</span>
              </h1>
              <p className="text-charcoal-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
                Je crée des sites e-commerce performants et optimisés SEO pour vous aider
                à développer vos ventes en ligne et atteindre de nouveaux clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={scrollToRendezVous} className="btn-primary cursor-pointer">
                  Prendre un rendez-vous
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a href="#tarifs" className="btn-secondary">
                  Voir les offres
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-charcoal-900 text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-sage-400 font-medium tracking-widest uppercase text-sm mb-4">Le marche e-commerce</p>
              <h2 className="font-serif text-2xl sm:text-3xl">Une opportunite a ne pas manquer</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-3xl sm:text-4xl text-sage-400 mb-2">{stat.value}</div>
                  <p className="text-charcoal-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">Fonctionnalites</p>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-charcoal-800 mb-6">
                Tout ce dont vous avez besoin pour vendre
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="p-6 sm:p-8 bg-cream-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-sage-600" />
                  </div>
                  <h3 className="font-serif text-xl text-charcoal-800 mb-3">{feature.title}</h3>
                  <p className="text-charcoal-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-cream-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 relative inline-block">
                <img src="https://i.ibb.co/Cs0NfZG0/Capture-d-cran-2026-03-22-170419.png" alt="Site e-commerce performant" className="rounded-2xl shadow-xl max-w-xs w-full h-auto" />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">Pourquoi moi ?</p>
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-charcoal-800 mb-6">
                  Un e-commerce pensé pour convertir
                </h2>
                <p className="text-charcoal-600 leading-relaxed mb-6">
                  Avoir une belle boutique ne suffit pas. Je conçois des sites e-commerce
                  avec une approche business : chaque élément est pensé pour maximiser vos conversions.
                </p>
                <ul className="space-y-4">
                  {['Parcours d\'achat optimisé pour maximiser les conversions', 'Fiches produits SEO-friendly pour attirer du trafic', 'Vitesse de chargement optimale', 'Version mobile parfaite et responsive', 'Sécurité renforcée pour rassurer vos clients'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="tarifs" className="section-padding bg-sage-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">Tarifs e-commerce</p>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-charcoal-800 mb-6">
                Des solutions pour tous les budgets
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {pricing.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                    plan.popular ? 'bg-sage-600 text-white shadow-xl scale-105' : 'bg-white shadow-md hover:shadow-lg'
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
                  <div className={`text-3xl font-serif mb-6 ${plan.popular ? 'text-white' : 'text-charcoal-800'}`}>
                    {plan.price}<span className="text-lg">EUR</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-sage-200' : 'text-sage-500'}`} />
                        <span className={plan.popular ? 'text-sage-50' : 'text-charcoal-600'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={scrollToRendezVous}
                    className={`block text-center w-full py-3 rounded-full font-medium transition-all cursor-pointer ${
                      plan.popular ? 'bg-white text-sage-600 hover:bg-cream-100' : 'bg-sage-500 text-white hover:bg-sage-600'
                    }`}
                  >
                    Prendre un rendez-vous
                  </button>
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
