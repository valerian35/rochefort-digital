import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Send } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const services = [
    { to: '/creation-site-internet', label: 'Création site internet' },
    { to: '/seo-referencement', label: 'SEO / Référencement' },
    { to: '/refonte-site', label: 'Refonte de site' },
    { to: '/e-commerce', label: 'E-commerce' },
  ];

  const navLinks = [
    { href: '/#about', label: 'À propos', isRoute: false },
    { href: '/#portfolio', label: 'Réalisations', isRoute: false },
    { href: '/blog', label: 'Blog', isRoute: true },
    { href: '/faq', label: 'FAQ', isRoute: false },
  ];

  const headerBg = isScrolled || !isHomePage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        headerBg
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              headerBg ? 'bg-sage-500' : 'bg-white'
            } group-hover:bg-sage-400`} />
            <span className={`font-serif text-xl tracking-tight transition-colors duration-300 ${
              headerBg ? 'text-charcoal-800' : 'text-white'
            }`}>
              Rochefort<span className="text-sage-500">—</span>digital
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  headerBg
                    ? 'bg-charcoal-700/10 text-charcoal-700 hover:bg-charcoal-700/20'
                    : 'bg-white/15 text-white/90 hover:bg-white/25'
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-3 z-50">
                  <div className="bg-charcoal-800 rounded-xl shadow-2xl py-3 min-w-[250px] border border-charcoal-700">
                    {services.map((service, index) => (
                      <Link
                        key={service.to}
                        to={service.to}
                        className="block px-5 py-3 text-white/80 hover:bg-charcoal-700 hover:text-sage-400 transition-colors"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium tracking-wide uppercase text-sm transition-colors duration-300 ${
                    headerBg
                      ? 'text-charcoal-600 hover:text-sage-600'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-medium tracking-wide uppercase text-sm transition-colors duration-300 ${
                    headerBg
                      ? 'text-charcoal-600 hover:text-sage-600'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sage-500 text-white font-medium rounded-full transition-all duration-300 hover:bg-sage-600 hover:shadow-lg"
            >
              <Send className="w-4 h-4" />
              Me contacter
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal-700/10 text-charcoal-700 font-medium rounded-full transition-all duration-300 hover:bg-charcoal-700/20"
            >
              Demander un devis
              <span className="w-1.5 h-1.5 rounded-full bg-charcoal-700/60" />
            </a>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${headerBg ? 'text-charcoal-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${headerBg ? 'text-charcoal-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-6 px-4">
            <div className="flex flex-col gap-2">
              <p className="text-charcoal-400 text-sm font-medium uppercase tracking-wide px-2 mb-2">
                Services
              </p>
              {services.map((service) => (
                <Link
                  key={service.to}
                  to={service.to}
                  className="text-charcoal-700 font-medium py-2 px-2 hover:text-sage-600 hover:bg-sage-50 rounded-lg transition-colors"
                >
                  {service.label}
                </Link>
              ))}

              <div className="border-t border-charcoal-100 my-4" />

              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-charcoal-700 font-medium py-2 px-2 hover:text-sage-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-charcoal-700 font-medium py-2 px-2 hover:text-sage-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}

              <div className="border-t border-charcoal-100 my-4" />

              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sage-500 text-white font-medium rounded-full transition-all duration-300 hover:bg-sage-600 w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Send className="w-4 h-4" />
                Me contacter
              </a>

              <a
                href="/#contact"
                className="btn-primary justify-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demander un devis
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
