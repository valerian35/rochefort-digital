import { ArrowRight } from 'lucide-react';

const scrollToRendezVous = () => {
  const element = document.getElementById('rendez-vous-form');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sage-400 via-sage-300 to-cream-200" />

      <div className="decorative-curves text-sage-600">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,500 Q250,300 500,500 T1000,500" />
          <path d="M0,600 Q300,400 600,600 T1000,400" />
          <path d="M100,700 Q400,500 700,700 T1000,600" />
        </svg>
      </div>

      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in">
            <span className="text-white/80 font-medium tracking-widest uppercase text-sm">
              Freelance
            </span>
            <div className="relative">
              <div className="w-12 h-6 bg-white/20 rounded-full" />
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-md" />
            </div>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white mb-8 opacity-0 animate-fade-in-up animate-delay-100 leading-tight">
            Créez votre présence digitale forte à Rennes
            <br />
            <span className="italic text-white/90">et convertissez vos visiteurs en clients</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in-up animate-delay-200 leading-relaxed">
            Votre agence web à Rennes vous crée un site performant, optimisé Google et conçu pour générer des résultats durables.
            <br />
            <span className="text-white">Stratégie, design, SEO — tout ce dont vous avez besoin.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animate-delay-300">
            <button
              onClick={scrollToRendezVous}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-sage-700 font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              Prendre un rendez-vous
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-medium rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white"
            >
              Découvrir mes services
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-delay-500">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
