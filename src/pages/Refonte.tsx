import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Check, RefreshCw, Zap, TrendingUp, Shield, Smartphone, Search, ArrowRight, AlertTriangle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

export default function Refonte() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Refonte Site Internet | Modernisation Web SEO';
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          const offset = 80;
          const top = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 50);
    }
  }, []);

  const signs = [
    { icon: AlertTriangle, title: 'Design démodé', description: 'Votre site a plus de 3 ans et ne reflète plus votre image de marque actuelle.' },
    { icon: Smartphone, title: 'Non responsive', description: 'Votre site ne s\'affiche pas correctement sur mobile et tablette.' },
    { icon: Zap, title: 'Lenteur excessive', description: 'Les pages mettent plus de 3 secondes à charger, faisant fuir vos visiteurs.' },
    { icon: TrendingUp, title: 'Pas de trafic', description: 'Votre site n\'apparaît pas dans les premiers résultats de Google.' },
    { icon: Search, title: 'Taux de rebond élevé', description: 'Les visiteurs quittent votre site sans effectuer d\'action.' },
    { icon: Shield, title: 'Problèmes de sécurité', description: 'Votre site n\'est pas en HTTPS ou utilise des technologies obsolètes.' },
  ];

  const benefits = [
    { title: 'Performance améliorée', description: 'Un site rapide qui offre une expérience utilisateur optimale et plaît à Google.' },
    { title: 'Design moderne', description: 'Une identité visuelle actuelle qui inspire confiance et crédibilité.' },
    { title: 'SEO optimisé', description: 'Une structure technique pensée pour le référencement naturel.' },
    { title: 'Mobile-first', description: 'Un site parfaitement adapté à tous les écrans et appareils.' },
  ];

  const process = [
    { step: '01', title: 'Audit de l\'existant', description: 'Analyse complète de votre site actuel : performances, SEO, UX, contenu.' },
    { step: '02', title: 'Stratégie de migration', description: 'Plan détaillé pour préserver votre référencement actuel.' },
    { step: '03', title: 'Conception & Design', description: 'Création de maquettes modernes qui améliorent l\'expérience utilisateur.' },
    { step: '04', title: 'Développement', description: 'Intégration avec les dernières technologies web.' },
    { step: '05', title: 'Migration & Tests', description: 'Transfert des contenus et tests exhaustifs avant la mise en ligne.' },
    { step: '06', title: 'Lancement & Suivi', description: 'Mise en production surveillée et suivi post-lancement.' },
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
                Refonte de site internet
              </p>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-800 leading-tight mb-6">
                Modernisez votre site web{' '}
                <span className="text-sage-600">sans perdre votre SEO</span>
              </h1>
              <p className="text-charcoal-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
                Votre site ne vous ressemble plus ou ne performe pas ? Je le transforme en un outil
                moderne et efficace, tout en préservant votre référencement existant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary">
                  Analyser mon site gratuitement
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#processus" className="btn-secondary">
                  Voir le processus
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">Signes d'alerte</p>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-charcoal-800 mb-6">
                Votre site a-t-il besoin d'une refonte ?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {signs.map((sign) => (
                <div key={sign.title} className="p-6 sm:p-8 bg-cream-50 rounded-2xl border-l-4 border-sage-400 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mb-6">
                    <sign.icon className="w-6 h-6 text-sage-600" />
                  </div>
                  <h3 className="font-serif text-xl text-charcoal-800 mb-3">{sign.title}</h3>
                  <p className="text-charcoal-600 leading-relaxed">{sign.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-sage-600 text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sage-200 font-medium tracking-widest uppercase text-sm mb-4">Avantages</p>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">Ce qu'une refonte va vous apporter</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">{benefit.title}</h3>
                    <p className="text-sage-100 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="processus" className="section-padding bg-cream-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">Mon processus</p>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-charcoal-800 mb-6">Une refonte maîtrisée en 6 étapes</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {process.map((item) => (
                <div key={item.step} className="p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <span className="text-sage-400 font-serif text-3xl sm:text-4xl">{item.step}</span>
                  <h3 className="font-serif text-xl text-charcoal-800 mt-4 mb-3">{item.title}</h3>
                  <p className="text-charcoal-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">Préservation SEO</p>
                <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-800 mb-6">
                  Refondre sans perdre votre positionnement
                </h2>
                <p className="text-charcoal-600 leading-relaxed mb-6">
                  Une refonte mal gérée peut impacter votre trafic de manière importante.
                  C'est pourquoi je mets en place une stratégie de migration SEO rigoureuse.
                </p>
                <ul className="space-y-4">
                  {['Audit complet de votre SEO actuel', 'Mapping des URLs et redirections 301', 'Conservation des contenus performants', 'Optimisation de la nouvelle structure', 'Suivi post-migration des positions'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Refonte de site web moderne" className="rounded-2xl shadow-xl" />
                <div className="absolute -bottom-6 -right-6 bg-sage-500 text-white p-6 rounded-xl shadow-lg">
                  <RefreshCw className="w-8 h-8 mb-2" />
                  <p className="font-serif text-lg">Transformation</p>
                  <p className="text-sage-100 text-sm">complete</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
