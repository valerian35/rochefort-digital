import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Github, Twitter, Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: 'Création site internet', href: '/creation-site-internet' },
    { label: 'Référencement SEO', href: '/seo-referencement' },
    { label: 'Refonte site web', href: '/refonte-site' },
    { label: 'E-commerce', href: '/e-commerce' },
  ];

  const categories = [
    { label: 'Création de sites web', href: '/blog/creation-sites-web' },
    { label: 'Référencement SEO', href: '/blog/referencement-seo' },
    { label: 'Développement web', href: '/blog/developpement-web' },
  ];

  const cities = [
    'Rennes',
    'Paris',
    'Lyon',
    'Marseille',
    'Toulouse',
    'Bordeaux',
    'Lille',
    'Nantes',
  ];

  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-sage-400" />
                <span className="font-serif text-xl tracking-tight">
                  Rochefort<span className="text-sage-400">—</span>digital
                </span>
              </Link>
              <p className="text-charcoal-300 leading-relaxed mb-6">
                Développeur web et expert SEO freelance. Je crée des sites performants qui génèrent des clients partout en France.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center hover:bg-sage-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center hover:bg-sage-500 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center hover:bg-sage-500 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      to={service.href}
                      className="text-charcoal-300 hover:text-sage-400 transition-colors"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-6">Blog</h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat.label}>
                    <Link
                      to={cat.href}
                      className="text-charcoal-300 hover:text-sage-400 transition-colors"
                    >
                      {cat.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/blog"
                    className="text-sage-400 hover:text-sage-300 transition-colors font-medium"
                  >
                    Voir tout le blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-6">Zones d'intervention</h3>
              <ul className="grid grid-cols-2 gap-2">
                {cities.map((city) => (
                  <li key={city}>
                    <span className="text-charcoal-300 text-sm">{city}</span>
                  </li>
                ))}
              </ul>
              <p className="text-charcoal-400 text-sm mt-4">
                + toute la France
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sage-400 flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal-300">
                    Rennes, France
                    <br />
                    <span className="text-charcoal-400 text-sm">
                      Intervention nationale
                    </span>
                  </span>
                </li>
                <li>
                  <a
                    href="mailto:contact@rochefort-digital.fr"
                    className="flex items-center gap-3 text-charcoal-300 hover:text-sage-400 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-sage-400" />
                    contact@rochefort-digital.fr
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+33698322073"
                    className="flex items-center gap-3 text-charcoal-300 hover:text-sage-400 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-sage-400" />
                    06 98 32 20 73
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-charcoal-800">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center gap-8 mb-6">
            <Link
              to="/rendez-vous"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-sage-500 text-white rounded-full hover:bg-sage-600 transition-colors font-medium"
            >
              <Send className="w-4 h-4" />
              Audit gratuit
            </Link>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
              <p className="text-charcoal-400 text-sm">
                {currentYear} Rochefort-digital. Tous droits réservés.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="text-charcoal-400 text-sm hover:text-sage-400 transition-colors"
                >
                  Mentions légales
                </a>
                <a
                  href="#"
                  className="text-charcoal-400 text-sm hover:text-sage-400 transition-colors"
                >
                  Politique de confidentialité
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
