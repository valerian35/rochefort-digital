import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { categories } from '../data/categories';

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Blog | Conseils Web, SEO & Developpement';
  }, []);

  const allArticles = categories.flatMap((cat) =>
    cat.articles.map((article) => ({
      ...article,
      categoryTitle: cat.title,
      categorySlug: cat.slug,
    }))
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-sage-50 to-cream-50">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour a l'accueil
            </Link>

            <div className="max-w-3xl">
              <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">
                Blog & Ressources
              </p>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-800 leading-tight mb-6">
                Guides et conseils pour votre{' '}
                <span className="text-sage-600">presence en ligne</span>
              </h1>
              <p className="text-charcoal-600 text-lg sm:text-xl leading-relaxed">
                Retrouvez mes articles sur la creation de sites web, le referencement SEO
                et les bonnes pratiques du developpement web.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-800">
                Parcourir par categorie
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/blog/${category.slug}`}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] card-hover"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/50 to-transparent" />

                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="font-serif text-2xl text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70 text-sm">
                        {category.articles.length} articles
                      </span>
                      <span className="flex items-center gap-2 text-sage-300 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        Explorer <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-cream-50">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-800">
                Articles recents
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {allArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/blog/${article.categorySlug}/${article.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-sage-500 text-white text-xs font-medium rounded-full">
                          {article.categoryTitle}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-charcoal-500 text-sm mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl text-charcoal-800 mb-3 group-hover:text-sage-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-charcoal-600 text-sm leading-relaxed line-clamp-2 mb-4">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-sage-600 font-medium text-sm group-hover:gap-3 transition-all">
                        Lire l'article
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-sage-600 text-white">
          <div className="container-custom text-center">
            <h2 className="font-serif text-3xl sm:text-4xl mb-4">
              Besoin d'aide pour votre projet ?
            </h2>
            <p className="text-sage-100 text-lg mb-8 max-w-2xl mx-auto">
              Discutons de votre projet web et voyons comment je peux vous accompagner.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sage-600 font-medium rounded-full hover:bg-cream-100 transition-all"
            >
              Me contacter
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
