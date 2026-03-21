import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, ArrowRight, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCategoryBySlug, categories } from '../data/categories';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (category) {
      document.title = `${category.title} | Blog`;
    }
  }, [category]);

  if (!category) {
    return <Navigate to="/blog" replace />;
  }

  const otherCategories = categories.filter((cat) => cat.id !== category.id);

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-sage-50 to-cream-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src={category.image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-sage-50 via-sage-50/95 to-cream-50" />
          </div>

          <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>

            <div className="max-w-3xl">
              <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">
                Categorie
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal-800 leading-tight mb-6">
                {category.title}
              </h1>
              <p className="text-charcoal-600 text-lg sm:text-xl leading-relaxed">
                {category.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-charcoal-500">
                <span className="w-2 h-2 rounded-full bg-sage-500" />
                <span>{category.articles.length} articles</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.articles.map((article, index) => (
                <Link
                  key={article.id}
                  to={`/blog/${category.slug}/${article.slug}`}
                  className={`group ${index === 0 ? 'md:col-span-2' : ''}`}
                >
                  <article className={`bg-cream-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 ${
                    index === 0 ? 'grid md:grid-cols-2' : ''
                  }`}>
                    <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[4/3] md:aspect-auto' : 'aspect-video'}`}>
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className={`p-6 ${index === 0 ? 'md:p-8 flex flex-col justify-center' : ''}`}>
                      <div className="flex items-center gap-4 text-charcoal-500 text-sm mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>

                      <h2 className={`font-serif text-charcoal-800 mb-3 group-hover:text-sage-600 transition-colors ${
                        index === 0 ? 'text-2xl sm:text-3xl' : 'text-xl'
                      }`}>
                        {article.title}
                      </h2>

                      <p className={`text-charcoal-600 leading-relaxed mb-4 ${
                        index === 0 ? '' : 'line-clamp-2'
                      }`}>
                        {article.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-sage-600 font-medium group-hover:gap-3 transition-all">
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

        <section className="section-padding bg-cream-50">
          <div className="container-custom">
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-800 mb-8 text-center">
              Autres categories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {otherCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/blog/${cat.slug}`}
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-charcoal-800 group-hover:text-sage-600 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-charcoal-500 text-sm mt-1">
                      {cat.articles.length} articles
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-sage-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
