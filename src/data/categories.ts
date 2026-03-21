import { creationSitesWebArticles } from './articles/creation-sites-web';
import { referencementSeoArticles } from './articles/referencement-seo';
import { developpementWebArticles } from './articles/developpement-web';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
  content?: string;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  articles: Article[];
}

export const categories: Category[] = [
  {
    id: '1',
    title: 'Création de sites web',
    slug: 'creation-sites-web',
    description: 'Guides et conseils pour créer un site internet professionnel, choisir les bonnes technologies et réussir votre projet web.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    articles: [
      {
        id: '1-1',
        title: 'Les 10 éléments essentiels d\'un site web professionnel',
        excerpt: 'Découvrez les composants indispensables pour créer un site web qui inspire confiance et convertit vos visiteurs en clients.',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
        date: '15 Mars 2025',
        readTime: '8 min',
        slug: '10-elements-site-professionnel',
        content: creationSitesWebArticles['10-elements-site-professionnel'],
      },
      {
        id: '1-2',
        title: 'WordPress, Webflow ou développement sur mesure : que choisir ?',
        excerpt: 'Comparatif complet des différentes solutions pour créer votre site web selon vos besoins et votre budget.',
        image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
        date: '10 Mars 2025',
        readTime: '12 min',
        slug: 'wordpress-webflow-sur-mesure',
        content: creationSitesWebArticles['wordpress-webflow-sur-mesure'],
      },
      {
        id: '1-3',
        title: 'Comment préparer le cahier des charges de votre site web',
        excerpt: 'Guide pratique pour rédiger un brief efficace et bien communiquer vos attentes à votre développeur.',
        image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
        date: '5 Mars 2025',
        readTime: '10 min',
        slug: 'cahier-charges-site-web',
        content: creationSitesWebArticles['cahier-charges-site-web'],
      },
      {
        id: '1-4',
        title: 'L\'importance du responsive design en 2025',
        excerpt: 'Pourquoi votre site doit absolument être optimisé pour mobile et comment y parvenir.',
        image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
        date: '28 Février 2025',
        readTime: '6 min',
        slug: 'importance-responsive-design',
        content: creationSitesWebArticles['importance-responsive-design'],
      },
    ],
  },
  {
    id: '2',
    title: 'Référencement SEO',
    slug: 'referencement-seo',
    description: 'Stratégies et techniques pour améliorer votre visibilité sur Google et attirer du trafic qualifié sur votre site.',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    articles: [
      {
        id: '2-1',
        title: 'Guide complet du SEO pour débutants',
        excerpt: 'Apprenez les bases du référencement naturel et commencez à optimiser votre site pour Google.',
        image: 'https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=800',
        date: '12 Mars 2025',
        readTime: '15 min',
        slug: 'guide-seo-debutants',
        content: referencementSeoArticles['guide-seo-debutants'],
      },
      {
        id: '2-2',
        title: 'Comment choisir ses mots-clés stratégiques',
        excerpt: 'Méthodologie complète pour identifier les mots-clés qui vont générer du trafic qualifié.',
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
        date: '8 Mars 2025',
        readTime: '10 min',
        slug: 'choisir-mots-cles',
        content: referencementSeoArticles['choisir-mots-cles'],
      },
      {
        id: '2-3',
        title: 'Les erreurs SEO qui plombent votre référencement',
        excerpt: 'Évitez ces pièges courants qui empêchent votre site d\'atteindre la première page de Google.',
        image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
        date: '1 Mars 2025',
        readTime: '8 min',
        slug: 'erreurs-seo-courantes',
        content: referencementSeoArticles['erreurs-seo-courantes'],
      },
      {
        id: '2-4',
        title: 'SEO local : comment dominer les recherches dans votre ville',
        excerpt: 'Stratégies pour apparaître en tête des résultats locaux et attirer des clients près de chez vous.',
        image: 'https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=800',
        date: '22 Février 2025',
        readTime: '9 min',
        slug: 'seo-local-guide',
        content: referencementSeoArticles['seo-local-guide'],
      },
    ],
  },
  {
    id: '3',
    title: 'Développement web',
    slug: 'developpement-web',
    description: 'Actualités, tutoriels et bonnes pratiques sur les technologies web modernes pour développer des sites performants.',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    articles: [
      {
        id: '3-1',
        title: 'Les tendances du développement web en 2025',
        excerpt: 'Découvrez les technologies et frameworks qui dominent le marché cette année.',
        image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
        date: '14 Mars 2025',
        readTime: '11 min',
        slug: 'tendances-dev-web-2025',
        content: developpementWebArticles['tendances-dev-web-2025'],
      },
      {
        id: '3-2',
        title: 'Optimiser les performances de votre site web',
        excerpt: 'Techniques concrètes pour accélérer le chargement de vos pages et améliorer l\'expérience utilisateur.',
        image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
        date: '7 Mars 2025',
        readTime: '13 min',
        slug: 'optimiser-performances-web',
        content: developpementWebArticles['optimiser-performances-web'],
      },
      {
        id: '3-3',
        title: 'Introduction à React pour les débutants',
        excerpt: 'Premiers pas avec la bibliothèque JavaScript la plus populaire pour créer des interfaces modernes.',
        image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
        date: '25 Février 2025',
        readTime: '14 min',
        slug: 'introduction-react',
        content: developpementWebArticles['introduction-react'],
      },
      {
        id: '3-4',
        title: 'Sécurité web : protéger votre site des attaques',
        excerpt: 'Les bonnes pratiques essentielles pour sécuriser votre site et protéger les données de vos utilisateurs.',
        image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
        date: '18 Février 2025',
        readTime: '10 min',
        slug: 'securite-web-guide',
        content: developpementWebArticles['securite-web-guide'],
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

export function getArticleBySlug(
  categorySlug: string,
  articleSlug: string
): { article: Article; category: Category } | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;

  const article = category.articles.find((art) => art.slug === articleSlug);
  if (!article) return undefined;

  return { article, category };
}
