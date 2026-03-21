import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Share2, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { categories, getArticleBySlug } from '../data/categories';

export default function ArticlePage() {
  const { categorySlug, articleSlug } = useParams<{ categorySlug: string; articleSlug: string }>();
  const result = articleSlug && categorySlug ? getArticleBySlug(categorySlug, articleSlug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (result?.article) {
      document.title = `${result.article.title} | Blog`;
    }
  }, [result]);

  if (!result) {
    return <Navigate to="/blog" replace />;
  }

  const { article, category } = result;

  const relatedArticles = category.articles
    .filter((a) => a.id !== article.id)
    .slice(0, 2);

  const otherCategories = categories.filter((cat) => cat.id !== category.id);

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <article>
          <header className="pt-32 pb-12 bg-gradient-to-b from-sage-50 to-cream-50">
            <div className="container-custom px-4 sm:px-6 lg:px-8">
              <Link
                to={`/blog/${category.slug}`}
                className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                {category.title}
              </Link>

              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-4 text-charcoal-500 text-sm mb-6">
                  <span className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full font-medium">
                    {category.title}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {article.readTime} de lecture
                  </span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-800 leading-tight mb-6">
                  {article.title}
                </h1>

                <p className="text-charcoal-600 text-lg sm:text-xl leading-relaxed mb-8">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-sage-200 flex items-center justify-center">
                      <User className="w-6 h-6 text-sage-600" />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal-800">Valérian Rochefort</p>
                      <p className="text-charcoal-500 text-sm">Expert Web & SEO</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-charcoal-500 text-sm mr-2">Partager :</span>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-sage-50 transition-colors"
                      aria-label="Partager sur LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-charcoal-600" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-sage-50 transition-colors"
                      aria-label="Partager sur Twitter"
                    >
                      <Twitter className="w-4 h-4 text-charcoal-600" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-sage-50 transition-colors"
                      aria-label="Partager sur Facebook"
                    >
                      <Facebook className="w-4 h-4 text-charcoal-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="relative -mt-4">
            <div className="container-custom px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="section-padding bg-white">
            <div className="container-custom">
              <div className="max-w-4xl">
                <div
                  className="prose prose-lg prose-charcoal max-w-none"
                  dangerouslySetInnerHTML={{ __html: article.content || '' }}
                />
              </div>
            </div>
          </div>

          <aside className="py-12 bg-sage-50 border-y border-sage-100">
            <div className="container-custom px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl flex flex-col sm:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-sage-200 flex items-center justify-center flex-shrink-0">
                  <User className="w-10 h-10 text-sage-600" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-charcoal-500 text-sm mb-1">Ecrit par</p>
                  <h3 className="font-serif text-xl text-charcoal-800 mb-2">Valérian Rochefort</h3>
                  <p className="text-charcoal-600 leading-relaxed">
                    Developpeur web freelance et expert SEO base a Rennes. J'accompagne les entreprises
                    dans leur transformation digitale depuis plus de 8 ans.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <section className="py-12 bg-white border-b border-charcoal-100">
            <div className="container-custom px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-charcoal-500 text-sm mb-2">Cet article vous a ete utile ?</p>
                  <p className="font-serif text-xl text-charcoal-800">Partagez-le avec votre reseau</p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#0077B5] text-white rounded-full hover:opacity-90 transition-opacity"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#1DA1F2] text-white rounded-full hover:opacity-90 transition-opacity"
                  >
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </a>
                  <button
                    className="flex items-center gap-2 px-5 py-2.5 bg-charcoal-100 text-charcoal-700 rounded-full hover:bg-charcoal-200 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    Copier
                  </button>
                </div>
              </div>
            </div>
          </section>
        </article>

        {relatedArticles.length > 0 && (
          <section className="section-padding bg-cream-50">
            <div className="container-custom">
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-800 mb-8">
                Articles similaires
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    to={`/blog/${category.slug}/${relatedArticle.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-4 text-charcoal-500 text-sm mb-3">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {relatedArticle.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {relatedArticle.readTime}
                          </span>
                        </div>

                        <h3 className="font-serif text-xl text-charcoal-800 mb-3 group-hover:text-sage-600 transition-colors">
                          {relatedArticle.title}
                        </h3>

                        <p className="text-charcoal-600 text-sm leading-relaxed line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-800 mb-8 text-center">
              Explorer d'autres sujets
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {otherCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/blog/${cat.slug}`}
                  className="group flex items-center gap-4 p-4 bg-cream-50 rounded-xl hover:shadow-lg transition-all duration-300"
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
