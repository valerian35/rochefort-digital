import { Mail, X } from 'lucide-react';
import { useState } from 'react';

export default function FloatingEmailButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xojpvolj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({
            email: '',
            message: '',
          });
          setSubmitted(false);
          setIsOpen(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 group"
        aria-label="Envoyer un message"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-sage-400 to-sage-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
          <div className="relative w-14 h-14 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 group-hover:scale-110 cursor-pointer">
            <Mail className="w-7 h-7 text-white" />
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-serif text-charcoal-800">Prendre un rendez-vous</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-charcoal-400 hover:text-charcoal-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-charcoal-800 mb-2 font-medium text-sm">
                  Email
                  <span className="text-sage-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  required
                  className="w-full px-4 py-2 bg-cream-50 border border-sage-200 rounded-lg text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-charcoal-800 mb-2 font-medium text-sm">
                  Message
                  <span className="text-sage-600">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre demande..."
                  rows={4}
                  required
                  className="w-full px-4 py-2 bg-cream-50 border border-sage-200 rounded-lg text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-colors resize-none text-sm"
                />
              </div>

              {submitted && (
                <div className="p-3 bg-green-50 border border-green-300 rounded-lg">
                  <p className="text-green-900 font-medium text-sm">Message envoyé avec succès!</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi...' : 'Envoyer'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
