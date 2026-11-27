import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-sage-50 to-cream-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
              <path d="M0,300 Q250,200 500,300 T1000,300" fill="none" stroke="currentColor" strokeWidth="1" className="text-sage-300" />
              <path d="M0,350 Q250,250 500,350 T1000,350" fill="none" stroke="currentColor" strokeWidth="1" className="text-sage-200" />
            </svg>
          </div>

          <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour a l'accueil
            </button>

            <div className="max-w-4xl">
              <p className="text-sage-600 font-medium tracking-widest uppercase text-sm mb-4">
                Parlons de votre projet
              </p>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-800 leading-tight mb-6">
                Transformons votre{' '}
                <span className="text-sage-600">vision en réalité</span>
              </h1>
              <p className="text-charcoal-600 text-lg sm:text-xl leading-relaxed max-w-2xl">
                Remplissez ce formulaire pour que nous commencions à discuter de votre projet. Je vous répondrai rapidement avec des propositions adaptées à vos besoins.
              </p>
            </div>
          </div>
        </section>

        <section id="contact-form" className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
