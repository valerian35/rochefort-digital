import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'seo-time',
    question: 'Combien de temps faut-il pour voir des résultats SEO à Rennes?',
    answer: 'Les résultats SEO ne sont pas immédiats. En général, vous commencerez à voir les premiers résultats après 3-4 mois d\'optimisation continue. Les résultats significatifs interviennent généralement entre 6-12 mois. Cela dépend de la compétitivité de votre niche, de l\'état initial de votre site et de la qualité des optimisations mises en place.',
    category: 'SEO'
  },
  {
    id: 'seo-local-national',
    question: 'Quelle est la différence entre SEO local et SEO national?',
    answer: 'Le SEO local optimise votre visibilité pour les recherches géographiques (par exemple: "SEO à Rennes"). Il inclut l\'optimisation de Google My Business, des annuaires locaux et des avis clients. Le SEO national vise à vous classer pour des mots-clés sans géolocalisation. Pour une entreprise locale, le SEO local est souvent plus rentable car il cible les clients proches.',
    category: 'SEO'
  },
  {
    id: 'services-outside-rennes',
    question: 'Proposez-vous des services pour les entreprises hors Rennes?',
    answer: 'Oui, absolument! Bien que je sois basé à Rennes, je travaille avec des entreprises dans toute la France et à l\'international. Pour les services distants, nous collaborons entièrement en ligne avec des réunions régulières par vidéoconférence. La géographie n\'est pas une limite pour la création web, le SEO ou le e-commerce.',
    category: 'Services'
  },
  {
    id: 'collaboration-process',
    question: 'Comment se déroule la collaboration?',
    answer: 'Le processus débute par une découverte de vos besoins et objectifs. Je réalise ensuite un audit de votre situation actuelle, puis je propose un plan d\'action détaillé. Pendant la mise en œuvre, nous maintenons une communication régulière avec des points de suivi hebdomadaires. Je fournis des rapports détaillés et des analyses pour suivre les progrès.',
    category: 'Collaboration'
  },
  {
    id: 'seo-guarantee',
    question: 'Garantissez-vous les résultats SEO?',
    answer: 'Je ne peux pas garantir des classements spécifiques car Google contrôle l\'algorithme. En revanche, je garantis des pratiques SEO éthiques et white-hat conformes aux directives Google. Je m\'engage à améliorer vos métriques (trafic, visibilité, conversions) et je fournis des rapports transparents pour mesurer les résultats réels.',
    category: 'SEO'
  },
  {
    id: 'website-creation-timeline',
    question: 'Combien de temps pour créer un site web?',
    answer: 'La création d\'un site web classique prend généralement 4-6 semaines. Un e-commerce plus complexe peut nécessiter 8-12 semaines. Cela dépend de la complexité du projet, du nombre de pages, des fonctionnalités requises et de la réactivité sur les retours. Je fournis toujours un calendrier précis dès le départ.',
    category: 'Création'
  },
  {
    id: 'technology-stack',
    question: 'Quelles technologies utilisez-vous pour les sites web?',
    answer: 'J\'utilise les technologies modernes et performantes: React/Vue pour le frontend, Node.js ou Python pour le backend, et Supabase pour les bases de données. Je choisis les technologies en fonction de vos besoins spécifiques pour assurer performance, scalabilité et maintenabilité à long terme.',
    category: 'Technique'
  },
  {
    id: 'seo-maintenance',
    question: 'Le SEO nécessite-t-il une maintenance continue?',
    answer: 'Oui, le SEO est un processus continu. Les algorithmes Google évoluent régulièrement, la concurrence augmente, et de nouvelles opportunités apparaissent. Je recommande une maintenance SEO mensuelle incluant le suivi des classements, l\'analyse de la concurrence, la création de contenu et les optimisations techniques. Cela maintient votre visibilité et votre croissance.',
    category: 'SEO'
  },
  {
    id: 'mobile-optimization',
    question: 'Tous vos sites sont-ils optimisés mobile?',
    answer: 'Oui, tout ce que je crée est 100% optimisé mobile. C\'est obligatoire aujourd\'hui car plus de 70% du trafic web provient des mobiles. Google penalise les sites non-responsive. Je mets en place un design responsive qui s\'adapte parfaitement à tous les appareils.',
    category: 'Technique'
  },
  {
    id: 'analytics-reporting',
    question: 'Comment suivez-vous les performances de mon site?',
    answer: 'Je configure Google Analytics, Google Search Console et des outils de suivi personnalisés. Je fournis des rapports mensuels détaillés incluant le trafic, les conversions, les classements SEO et le comportement des utilisateurs. Vous avez accès en continu au tableau de bord pour suivre les métriques en temps réel.',
    category: 'Reporting'
  }
];

const categories = ['SEO', 'Services', 'Collaboration', 'Création', 'Technique', 'Reporting'];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFAQ = activeCategory
    ? faqItems.filter(item => item.category === activeCategory)
    : faqItems;

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 bg-gradient-to-b from-sage-50 to-cream-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl text-charcoal-800 mb-6">
              Questions fréquentes
            </h1>
            <p className="text-xl text-charcoal-600">
              Trouvez les réponses à vos questions sur nos services, le SEO, la création web et bien plus.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === null
                    ? 'bg-sage-600 text-white shadow-lg'
                    : 'bg-white text-charcoal-700 border border-sage-200 hover:border-sage-400'
                }`}
              >
                Tous
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-sage-600 text-white shadow-lg'
                      : 'bg-white text-charcoal-700 border border-sage-200 hover:border-sage-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {filteredFAQ.map(item => (
                <div
                  key={item.id}
                  className="bg-white border border-sage-200 rounded-xl overflow-hidden hover:border-sage-400 hover:shadow-md transition-all"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-sage-50/50 transition-colors"
                  >
                    <h3 className="font-serif text-lg text-charcoal-800 text-left">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-sage-600 flex-shrink-0 ml-4 transition-transform duration-300 ${
                        openItems.includes(item.id) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openItems.includes(item.id) && (
                    <div className="px-6 pb-5 border-t border-sage-200">
                      <p className="text-charcoal-600 leading-relaxed pt-4">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-sage-600 to-sage-500 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-serif text-3xl text-white mb-4">
              Vous n'avez pas trouvé votre réponse?
            </h2>
            <p className="text-sage-100 mb-8 text-lg">
              Contactez-moi directement et je serai ravi de discuter de vos besoins spécifiques.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sage-600 font-medium rounded-full hover:bg-sage-50 transition-all shadow-lg hover:shadow-xl"
            >
              Prendre rendez-vous
              <span className="w-1.5 h-1.5 rounded-full bg-sage-600" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
