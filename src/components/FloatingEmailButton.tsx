import { Mail } from 'lucide-react';

export default function FloatingEmailButton() {
  const emailAddress = 'contact@rochefort-digital.fr';

  return (
    <a
      href={`mailto:${emailAddress}`}
      className="fixed bottom-8 right-8 z-40 group"
      aria-label="Envoyer un email"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-400 to-sage-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
        <div className="relative w-14 h-14 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 group-hover:scale-110 cursor-pointer">
          <Mail className="w-7 h-7 text-white" />
        </div>
      </div>
    </a>
  );
}
