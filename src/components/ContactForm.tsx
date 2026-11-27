import { useEffect, useRef, useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/xojpvolj';
const CALENDLY_URL = 'https://calendly.com/contact-rochefort-digital/30min';
const CONTACT_EMAIL = 'contact@rochefort-digital.fr';

const SERVICES = [
  'Création de site internet',
  'Référencement (SEO)',
  'Refonte de site',
  'Site e-commerce',
  'Autre besoin',
];

const BUDGETS = [
  'Moins de 2 000 €',
  'De 2 000 à 5 000 €',
  'De 5 000 à 10 000 €',
  'Plus de 10 000 €',
  'Je ne sais pas encore',
];

const DELAIS = [
  'Dès que possible (sous 2 semaines)',
  "D'ici 1 à 2 mois",
  'Dans 3 mois ou plus',
  'Pas de date précise',
];

const EMPTY_VALUES = {
  nom: '',
  email: '',
  telephone: '',
  services: [] as string[],
  budget: '',
  delai: '',
  projet: '',
};

type Values = typeof EMPTY_VALUES;
type Field = keyof Values;
type Errors = Partial<Record<Field, string>>;

function validate(values: Values): Errors {
  const errors: Errors = {};
  const phone = values.telephone.trim();

  if (!values.nom.trim()) {
    errors.nom = 'Veuillez entrer votre nom complet';
  }

  if (!values.email.trim()) {
    errors.email = 'Veuillez entrer votre adresse email';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Veuillez entrer une adresse email valide';
  }

  if (!phone) {
    errors.telephone = 'Veuillez entrer votre numéro de téléphone';
  } else if (!/^[\d\s\-+().]+$/.test(phone) || phone.replace(/\D/g, '').length < 10) {
    errors.telephone = 'Veuillez entrer un numéro de téléphone valide (10 chiffres minimum)';
  }

  if (values.services.length === 0) {
    errors.services = 'Veuillez sélectionner au moins un service';
  }

  if (!values.budget) {
    errors.budget = 'Veuillez sélectionner un budget';
  }

  if (!values.delai) {
    errors.delai = 'Veuillez sélectionner un délai';
  }

  if (values.projet.trim().length < 10) {
    errors.projet = 'Veuillez décrire votre projet (10 caractères minimum)';
  }

  return errors;
}

const inputClass = (hasError: boolean) =>
  `w-full px-4 py-3 bg-cream-50 border rounded-lg text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:ring-2 transition-colors ${
    hasError
      ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
      : 'border-sage-200 focus:border-sage-400 focus:ring-sage-100'
  }`;

const labelClass = 'block text-charcoal-800 mb-2 font-medium';

function ErrorMessage({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p id={id} className="flex items-center gap-2 mt-2 text-red-600 text-sm">
      <AlertCircle className="w-4 h-4 flex-shrink-0" />
      {message}
    </p>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY_VALUES);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle');
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status !== 'sent') return;

    successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const redirect = setTimeout(() => {
      window.location.href = CALENDLY_URL;
    }, 2000);

    return () => clearTimeout(redirect);
  }, [status]);

  const setValue = <K extends Field>(field: K, value: Values[K]) => {
    setValues(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const toggleService = (service: string) => {
    setValue(
      'services',
      values.services.includes(service)
        ? values.services.filter(s => s !== service)
        : [...values.services, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const newErrors = validate(values);
    setErrors(newErrors);

    const firstInvalid = Object.keys(newErrors)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Nouvelle demande de ${values.nom.trim()}`,
          nom: values.nom.trim(),
          email: values.email.trim(),
          telephone: values.telephone.trim(),
          services: values.services.join(', '),
          budget: values.budget,
          delai: values.delai,
          projet: values.projet.trim(),
        }),
      });

      setStatus(response.ok ? 'sent' : 'failed');
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('failed');
    }
  };

  const fieldProps = (field: Field) => ({
    id: `contact-${field}`,
    name: field,
    required: true,
    'aria-invalid': Boolean(errors[field]),
    'aria-describedby': errors[field] ? `contact-${field}-error` : undefined,
  });

  if (status === 'sent') {
    return (
      <div
        ref={successRef}
        role="status"
        className="max-w-2xl mx-auto bg-white rounded-2xl border border-sage-200 shadow-xl p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-sage-500 mx-auto mb-4" />
        <h3 className="font-serif text-3xl text-charcoal-800 mb-3">Merci pour votre demande !</h3>
        <p className="text-charcoal-600">
          Vous allez être redirigé vers mon agenda pour choisir un créneau.{' '}
          <a href={CALENDLY_URL} className="text-sage-700 underline">
            Ouvrir l'agenda maintenant
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="max-w-2xl mx-auto bg-white rounded-2xl border border-sage-200 shadow-xl p-6 sm:p-8 space-y-6 text-left"
    >
      <p className="text-charcoal-600 text-sm">Tous les champs sont obligatoires.</p>

      <div>
        <label htmlFor="contact-nom" className={labelClass}>Nom complet</label>
        <input
          {...fieldProps('nom')}
          type="text"
          autoComplete="name"
          placeholder="Jean Dupont"
          value={values.nom}
          onChange={e => setValue('nom', e.target.value)}
          className={inputClass(Boolean(errors.nom))}
        />
        <ErrorMessage id="contact-nom-error" message={errors.nom} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-email" className={labelClass}>Email</label>
          <input
            {...fieldProps('email')}
            type="email"
            autoComplete="email"
            placeholder="jean@exemple.com"
            value={values.email}
            onChange={e => setValue('email', e.target.value)}
            className={inputClass(Boolean(errors.email))}
          />
          <ErrorMessage id="contact-email-error" message={errors.email} />
        </div>

        <div>
          <label htmlFor="contact-telephone" className={labelClass}>Téléphone</label>
          <input
            {...fieldProps('telephone')}
            type="tel"
            autoComplete="tel"
            placeholder="06 12 34 56 78"
            value={values.telephone}
            onChange={e => setValue('telephone', e.target.value)}
            className={inputClass(Boolean(errors.telephone))}
          />
          <ErrorMessage id="contact-telephone-error" message={errors.telephone} />
        </div>
      </div>

      <fieldset aria-describedby={errors.services ? 'contact-services-error' : undefined}>
        <legend className={labelClass}>Services souhaités</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SERVICES.map(service => (
            <label
              key={service}
              className="flex items-center gap-3 p-3 bg-cream-50 border border-sage-200 rounded-lg cursor-pointer hover:border-sage-400 transition-colors"
            >
              <input
                type="checkbox"
                name="services"
                checked={values.services.includes(service)}
                onChange={() => toggleService(service)}
                className="w-5 h-5 accent-sage-500 cursor-pointer"
              />
              <span className="text-charcoal-700">{service}</span>
            </label>
          ))}
        </div>
        <ErrorMessage id="contact-services-error" message={errors.services} />
      </fieldset>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-budget" className={labelClass}>Budget estimé</label>
          <select
            {...fieldProps('budget')}
            value={values.budget}
            onChange={e => setValue('budget', e.target.value)}
            className={inputClass(Boolean(errors.budget))}
          >
            <option value="">Sélectionnez un budget</option>
            {BUDGETS.map(budget => (
              <option key={budget} value={budget}>{budget}</option>
            ))}
          </select>
          <ErrorMessage id="contact-budget-error" message={errors.budget} />
        </div>

        <div>
          <label htmlFor="contact-delai" className={labelClass}>Délai souhaité</label>
          <select
            {...fieldProps('delai')}
            value={values.delai}
            onChange={e => setValue('delai', e.target.value)}
            className={inputClass(Boolean(errors.delai))}
          >
            <option value="">Sélectionnez un délai</option>
            {DELAIS.map(delai => (
              <option key={delai} value={delai}>{delai}</option>
            ))}
          </select>
          <ErrorMessage id="contact-delai-error" message={errors.delai} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-projet" className={labelClass}>Votre projet</label>
        <textarea
          {...fieldProps('projet')}
          rows={5}
          placeholder="Votre activité, vos objectifs, votre site actuel si vous en avez un..."
          value={values.projet}
          onChange={e => setValue('projet', e.target.value)}
          className={`${inputClass(Boolean(errors.projet))} resize-none`}
        />
        <ErrorMessage id="contact-projet-error" message={errors.projet} />
      </div>

      {status === 'failed' && (
        <div role="alert" className="p-4 bg-red-50 border border-red-300 rounded-lg text-red-900 text-sm">
          Votre demande n'a pas pu être envoyée. Veuillez réessayer ou m'écrire à{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline font-medium">{CONTACT_EMAIL}</a>.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer et choisir un créneau
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-charcoal-600 text-sm text-center">Sans engagement. Réponse sous 24h.</p>
    </form>
  );
}
