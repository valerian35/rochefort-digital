export const developpementWebArticles: Record<string, string> = {
  '_author': 'Valérian Rochefort',
  'tendances-dev-web-2025': `
    <p class="text-xl text-charcoal-600 leading-relaxed mb-8">
      Le developpement web evolue a une vitesse fulgurante. En 2025, de nouvelles technologies
      emergent tandis que d'autres se consolident. Decouvrez les tendances qui faconnent le web
      moderne et les competences a maitriser pour rester competitif.
    </p>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">L'essor des meta-frameworks</h2>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Les meta-frameworks comme Next.js, Nuxt et SvelteKit dominent le paysage. Ils combinent
      le meilleur du rendu cote serveur (SSR), de la generation statique (SSG) et des applications
      monopage (SPA) pour offrir des performances optimales.
    </p>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li><strong>Next.js 14+</strong> : Server Components, Server Actions, et l'App Router revolutionnent React</li>
      <li><strong>Nuxt 3</strong> : l'ecosysteme Vue.js mature avec une DX exceptionnelle</li>
      <li><strong>SvelteKit</strong> : performances inegalees et syntaxe intuitive</li>
      <li><strong>Astro</strong> : le champion des sites statiques avec le concept d'islands</li>
    </ul>
    <div class="bg-sage-50 border-l-4 border-sage-500 p-6 mb-6">
      <p class="text-charcoal-700 font-medium">Tendance forte</p>
      <p class="text-charcoal-600 mt-2">
        Le rendu hybride (SSR + client) devient la norme. Les sites full-SPA cedent la place
        a des architectures plus nuancees optimisant SEO, performances et interactivite.
      </p>
    </div>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">L'intelligence artificielle dans le developpement</h2>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      L'IA transforme profondement la facon de coder. Les assistants IA deviennent des outils
      indispensables pour accelerer le developpement.
    </p>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li><strong>GitHub Copilot / Claude</strong> : autocompletion intelligente et generation de code</li>
      <li><strong>v0 / bolt.new</strong> : generation d'interfaces a partir de prompts</li>
      <li><strong>Cursor</strong> : IDE augmente par l'IA</li>
      <li><strong>ChatGPT / Claude</strong> : debugging et assistance au developpement</li>
    </ul>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Attention cependant : l'IA est un assistant, pas un remplacement. Comprendre le code
      genere reste essentiel pour maintenir et debugger efficacement.
    </p>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">TypeScript : le standard de facto</h2>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      TypeScript n'est plus une option mais une attente. Son adoption massive dans l'ecosysteme
      JavaScript en fait un prerequis pour la plupart des projets professionnels.
    </p>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li>Detection des erreurs a la compilation</li>
      <li>Autocompletion et documentation inline</li>
      <li>Refactoring securise</li>
      <li>Meilleure collaboration en equipe</li>
    </ul>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Edge Computing et Serverless</h2>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Deployer du code au plus pres des utilisateurs devient la norme. Les plateformes edge
      comme Vercel Edge, Cloudflare Workers ou Deno Deploy offrent des latences minimales.
    </p>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li>Temps de reponse < 50ms partout dans le monde</li>
      <li>Pas de serveur a gerer</li>
      <li>Scaling automatique</li>
      <li>Cout a l'usage</li>
    </ul>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Le CSS moderne</h2>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      CSS evolue rapidement avec de nouvelles fonctionnalites natives qui reduisent le besoin
      de JavaScript ou de preprocesseurs.
    </p>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li><strong>Container Queries</strong> : layouts vraiment responsives aux composants</li>
      <li><strong>CSS Nesting</strong> : imbrication native sans Sass</li>
      <li><strong>View Transitions API</strong> : animations de navigation natives</li>
      <li><strong>:has()</strong> : le selecteur parent enfin disponible</li>
      <li><strong>Subgrid</strong> : grilles imbriquees alignees</li>
    </ul>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Web Components et interoperabilite</h2>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Les Web Components gagnent en maturite et permettent de creer des composants reutilisables
      independamment du framework.
    </p>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li>Compatibilite avec tous les frameworks</li>
      <li>Encapsulation native avec Shadow DOM</li>
      <li>Librairies comme Lit, Stencil ou Shoelace</li>
      <li>Ideaux pour les design systems</li>
    </ul>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Performances web : Core Web Vitals</h2>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Les performances restent une priorite. Google integre les Core Web Vitals dans ses criteres
      de classement, rendant l'optimisation indispensable.
    </p>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li><strong>LCP</strong> (Largest Contentful Paint) : < 2.5s</li>
      <li><strong>INP</strong> (Interaction to Next Paint) : < 200ms</li>
      <li><strong>CLS</strong> (Cumulative Layout Shift) : < 0.1</li>
    </ul>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Les outils de developpement en vogue</h2>
    <div class="overflow-x-auto mb-8">
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-sage-100">
            <th class="border border-sage-200 p-4 text-left font-serif">Categorie</th>
            <th class="border border-sage-200 p-4 text-left">Outils populaires</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-sage-200 p-4 font-medium">Bundler</td>
            <td class="border border-sage-200 p-4">Vite, Turbopack, esbuild</td>
          </tr>
          <tr class="bg-cream-50">
            <td class="border border-sage-200 p-4 font-medium">Testing</td>
            <td class="border border-sage-200 p-4">Vitest, Playwright, Testing Library</td>
          </tr>
          <tr>
            <td class="border border-sage-200 p-4 font-medium">Styling</td>
            <td class="border border-sage-200 p-4">Tailwind CSS, CSS Modules, Panda CSS</td>
          </tr>
          <tr class="bg-cream-50">
            <td class="border border-sage-200 p-4 font-medium">State</td>
            <td class="border border-sage-200 p-4">Zustand, Jotai, TanStack Query</td>
          </tr>
          <tr>
            <td class="border border-sage-200 p-4 font-medium">Backend</td>
            <td class="border border-sage-200 p-4">Supabase, Firebase, PlanetScale</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bg-charcoal-800 text-white p-8 rounded-2xl mt-12">
      <h3 class="font-serif text-xl mb-4">Ce qu'il faut retenir</h3>
      <p class="text-charcoal-200 leading-relaxed">
        2025 marque la maturite du web moderne : frameworks hybrides, IA generative, edge computing
        et CSS natif puissant. La cle reste de maitriser les fondamentaux (HTML, CSS, JavaScript)
        tout en s'adaptant aux nouveaux outils qui ameliorent la productivite.
      </p>
    </div>
  `,

  'optimiser-performances-web': `
    <p class="text-xl text-charcoal-600 leading-relaxed mb-8">
      Un site lent fait fuir les visiteurs et degrade votre referencement. Les performances web ne
      sont plus optionnelles : elles impactent directement votre business. Decouvrez les techniques
      concretes pour accelerer significativement votre site.
    </p>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Pourquoi les performances sont cruciales</h2>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Les chiffres parlent d'eux-memes : chaque seconde de chargement supplementaire reduit
      les conversions de 7% et augmente le taux de rebond de 11%.
    </p>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li>53% des visites mobiles sont abandonnees apres 3 secondes</li>
      <li>Google integre la vitesse dans ses criteres de classement</li>
      <li>Amazon perd 1% de ventes par 100ms de latence supplementaire</li>
      <li>Les utilisateurs associent lenteur et manque de professionnalisme</li>
    </ul>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Mesurer avant d'optimiser</h2>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Avant toute optimisation, etablissez une baseline. Utilisez ces outils pour identifier
      les problemes et mesurer les progres.
    </p>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li><strong>Google PageSpeed Insights</strong> : analyse complete avec Core Web Vitals</li>
      <li><strong>GTmetrix</strong> : waterfall detaille et historique</li>
      <li><strong>WebPageTest</strong> : tests avances depuis differentes locations</li>
      <li><strong>Chrome DevTools</strong> : analyse locale en temps reel</li>
      <li><strong>Lighthouse</strong> : audit complet integre a Chrome</li>
    </ul>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Optimiser les images</h2>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Les images representent souvent 50% ou plus du poids d'une page. Leur optimisation
      est le quick win le plus impactant.
    </p>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">Choisir le bon format</h3>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li><strong>WebP</strong> : 30% plus leger que JPEG, support universel</li>
      <li><strong>AVIF</strong> : encore plus leger, support croissant</li>
      <li><strong>SVG</strong> : pour les icones et illustrations vectorielles</li>
      <li><strong>JPEG</strong> : fallback pour la compatibilite</li>
    </ul>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">Techniques d'optimisation</h3>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li>Compresser avec des outils comme Squoosh ou Sharp</li>
      <li>Dimensionner aux tailles d'affichage reelles</li>
      <li>Utiliser srcset pour servir differentes tailles</li>
      <li>Implementer le lazy loading (loading="lazy")</li>
      <li>Specifier width/height pour eviter le CLS</li>
    </ul>

    <div class="bg-sage-50 border-l-4 border-sage-500 p-6 mb-6">
      <p class="text-charcoal-700 font-medium">Exemple d'implementation</p>
      <pre class="text-sm text-charcoal-600 mt-2 overflow-x-auto"><code>&lt;img
  src="image.webp"
  srcset="image-400.webp 400w, image-800.webp 800w"
  sizes="(max-width: 600px) 400px, 800px"
  loading="lazy"
  width="800"
  height="600"
  alt="Description"
/&gt;</code></pre>
    </div>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Optimiser le CSS et JavaScript</h2>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">Reduire le poids des fichiers</h3>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li>Minifier CSS et JS en production</li>
      <li>Eliminer le code mort (tree shaking)</li>
      <li>Compresser avec Gzip ou Brotli</li>
      <li>Utiliser des imports dynamiques pour le code-splitting</li>
    </ul>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">Optimiser le chargement</h3>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li><strong>CSS critique</strong> : inliner le CSS above-the-fold</li>
      <li><strong>defer/async</strong> : differer le JS non essentiel</li>
      <li><strong>Preload</strong> : precharger les ressources critiques</li>
      <li><strong>Prefetch</strong> : precharger les pages suivantes probables</li>
    </ul>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Le cache : votre meilleur ami</h2>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Un cache bien configure permet de servir les ressources instantanement aux visiteurs recurrents.
    </p>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">Cache navigateur</h3>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Configurez les headers Cache-Control pour que le navigateur conserve les ressources statiques.
      Les assets avec hash dans le nom peuvent etre caches tres longtemps.
    </p>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">CDN (Content Delivery Network)</h3>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Un CDN distribue vos fichiers sur des serveurs partout dans le monde, reduisant la latence
      pour tous les utilisateurs. Cloudflare, Vercel, Netlify proposent des CDN integres.
    </p>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Optimiser les Core Web Vitals</h2>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">LCP (Largest Contentful Paint)</h3>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Le LCP mesure le temps d'affichage du plus grand element visible. Pour l'ameliorer :
    </p>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li>Precharger l'image hero (preload)</li>
      <li>Optimiser le serveur (TTFB < 800ms)</li>
      <li>Eviter les polices bloquantes</li>
      <li>Utiliser un CDN</li>
    </ul>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">INP (Interaction to Next Paint)</h3>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      L'INP mesure la reactivite aux interactions. Pour l'ameliorer :
    </p>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li>Minimiser le JavaScript sur le thread principal</li>
      <li>Decouper les longues taches (> 50ms)</li>
      <li>Utiliser des Web Workers pour les calculs lourds</li>
      <li>Virtualiser les longues listes</li>
    </ul>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">CLS (Cumulative Layout Shift)</h3>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Le CLS mesure la stabilite visuelle. Pour l'ameliorer :
    </p>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li>Toujours specifier les dimensions des images</li>
      <li>Reserver l'espace pour les publicites et embeds</li>
      <li>Eviter d'injecter du contenu au-dessus du fold</li>
      <li>Utiliser transform au lieu de top/left pour les animations</li>
    </ul>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Checklist performance</h2>
    <div class="bg-cream-100 p-6 rounded-xl mb-6">
      <ul class="text-charcoal-600 space-y-2">
        <li>[ ] Images en WebP/AVIF, compressees, avec lazy loading</li>
        <li>[ ] CSS et JS minifies et compresses</li>
        <li>[ ] CSS critique inline</li>
        <li>[ ] Polices optimisees avec font-display: swap</li>
        <li>[ ] Cache navigateur et CDN configures</li>
        <li>[ ] Code-splitting implemente</li>
        <li>[ ] Core Web Vitals au vert</li>
        <li>[ ] Score PageSpeed > 90</li>
      </ul>
    </div>

    <div class="bg-charcoal-800 text-white p-8 rounded-2xl mt-12">
      <h3 class="font-serif text-xl mb-4">En resume</h3>
      <p class="text-charcoal-200 leading-relaxed">
        L'optimisation des performances est un processus continu. Commencez par les images et le
        cache (gains rapides), puis affinez progressivement. Un site rapide, c'est plus de
        conversions, un meilleur SEO et des utilisateurs satisfaits.
      </p>
    </div>
  `,

  'introduction-react': `
    <p class="text-xl text-charcoal-600 leading-relaxed mb-8">
      React est la bibliotheque JavaScript la plus utilisee pour creer des interfaces utilisateur
      modernes. Developpee par Meta (Facebook), elle propulse des millions de sites web dont
      Facebook, Instagram, Netflix et Airbnb. Ce guide vous accompagne dans vos premiers pas.
    </p>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Qu'est-ce que React ?</h2>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      React est une bibliotheque JavaScript declarative pour construire des interfaces utilisateur
      a partir de composants reutilisables. Elle se concentre sur la couche "Vue" de votre application.
    </p>
    <div class="bg-sage-50 border-l-4 border-sage-500 p-6 mb-6">
      <p class="text-charcoal-700 font-medium">Pourquoi React est populaire</p>
      <ul class="text-charcoal-600 mt-2 space-y-1">
        <li>- Approche par composants reutilisables</li>
        <li>- Virtual DOM pour des performances optimales</li>
        <li>- Ecosysteme riche et communaute active</li>
        <li>- Soutenu par Meta et utilise en production massive</li>
      </ul>
    </div>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Les concepts fondamentaux</h2>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">1. Les composants</h3>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Un composant React est une fonction qui retourne du JSX (une syntaxe proche du HTML).
      Chaque composant est independant et reutilisable.
    </p>
    <div class="bg-cream-100 p-6 rounded-xl mb-6">
      <pre class="text-sm text-charcoal-700 overflow-x-auto"><code>function Button({ text, onClick }) {
  return (
    &lt;button onClick={onClick}&gt;
      {text}
    &lt;/button&gt;
  );
}

// Utilisation
&lt;Button text="Cliquez-moi" onClick={() => alert('Clic!')} /&gt;</code></pre>
    </div>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">2. Les props</h3>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Les props (proprietes) permettent de passer des donnees d'un composant parent vers un
      composant enfant. Elles sont en lecture seule.
    </p>
    <div class="bg-cream-100 p-6 rounded-xl mb-6">
      <pre class="text-sm text-charcoal-700 overflow-x-auto"><code>function Card({ title, description, image }) {
  return (
    &lt;div className="card"&gt;
      &lt;img src={image} alt={title} /&gt;
      &lt;h2&gt;{title}&lt;/h2&gt;
      &lt;p&gt;{description}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
    </div>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">3. Le state (etat)</h3>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Le state permet a un composant de gerer des donnees qui peuvent changer dans le temps.
      Quand le state change, React re-rend automatiquement le composant.
    </p>
    <div class="bg-cream-100 p-6 rounded-xl mb-6">
      <pre class="text-sm text-charcoal-700 overflow-x-auto"><code>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;Compteur : {count}&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Incrementer
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
    </div>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">4. Les hooks</h3>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Les hooks sont des fonctions speciales qui permettent d'utiliser le state et d'autres
      fonctionnalites React dans les composants fonctionnels.
    </p>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li><strong>useState</strong> : gerer le state local</li>
      <li><strong>useEffect</strong> : gerer les effets de bord (API, DOM)</li>
      <li><strong>useContext</strong> : acceder au contexte global</li>
      <li><strong>useMemo</strong> : memoriser des calculs couteux</li>
      <li><strong>useCallback</strong> : memoriser des fonctions</li>
    </ul>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Exemple pratique : une todo list</h2>
    <div class="bg-cream-100 p-6 rounded-xl mb-6">
      <pre class="text-sm text-charcoal-700 overflow-x-auto"><code>import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    &lt;div&gt;
      &lt;input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nouvelle tache"
      /&gt;
      &lt;button onClick={addTodo}&gt;Ajouter&lt;/button&gt;

      &lt;ul&gt;
        {todos.map(todo => (
          &lt;li key={todo.id}&gt;
            {todo.text}
            &lt;button onClick={() => deleteTodo(todo.id)}&gt;
              Supprimer
            &lt;/button&gt;
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}</code></pre>
    </div>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Demarrer un projet React</h2>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      La facon la plus simple de demarrer est d'utiliser Vite ou Create React App.
      Je recommande Vite pour ses performances superieures.
    </p>
    <div class="bg-cream-100 p-6 rounded-xl mb-6">
      <pre class="text-sm text-charcoal-700 overflow-x-auto"><code># Avec Vite (recommande)
npm create vite@latest mon-projet -- --template react

# Naviguer et installer
cd mon-projet
npm install
npm run dev</code></pre>
    </div>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">L'ecosysteme React</h2>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      React seul ne suffit pas pour une application complete. Voici les outils complementaires courants :
    </p>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li><strong>React Router</strong> : navigation entre pages</li>
      <li><strong>TanStack Query</strong> : gestion des donnees asynchrones</li>
      <li><strong>Zustand / Redux</strong> : state management global</li>
      <li><strong>Tailwind CSS</strong> : styling utilitaire</li>
      <li><strong>Next.js</strong> : framework full-stack</li>
    </ul>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Ressources pour apprendre</h2>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li><strong>Documentation officielle</strong> : react.dev (excellente et interactive)</li>
      <li><strong>Scrimba</strong> : cours interactifs gratuits</li>
      <li><strong>Frontend Masters</strong> : cours approfondis</li>
      <li><strong>YouTube</strong> : Web Dev Simplified, Traversy Media</li>
    </ul>

    <div class="bg-charcoal-800 text-white p-8 rounded-2xl mt-12">
      <h3 class="font-serif text-xl mb-4">Conseils pour debuter</h3>
      <p class="text-charcoal-200 leading-relaxed">
        Maitrisez d'abord les bases de JavaScript (ES6+) avant de vous plonger dans React.
        Commencez par des projets simples : une todo list, un compteur, une galerie photo.
        N'essayez pas d'apprendre tout l'ecosysteme d'un coup. React seul + quelques hooks
        suffisent pour creer des interfaces impressionnantes.
      </p>
    </div>
  `,

  'securite-web-guide': `
    <p class="text-xl text-charcoal-600 leading-relaxed mb-8">
      La securite web n'est pas optionnelle. Une faille peut exposer les donnees de vos utilisateurs,
      nuire a votre reputation et vous exposer a des sanctions legales (RGPD). Decouvrez les bonnes
      pratiques essentielles pour proteger votre site et vos utilisateurs.
    </p>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Les principales menaces</h2>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Comprendre les attaques courantes est la premiere etape pour s'en proteger. Voici les
      vulnerabilites les plus frequentes selon l'OWASP.
    </p>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">1. Injection SQL</h3>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      L'attaquant insere du code SQL malveillant via les champs de formulaire pour acceder
      ou modifier la base de donnees.
    </p>
    <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
      <p class="text-charcoal-700 font-medium">Exemple d'attaque</p>
      <pre class="text-sm text-charcoal-600 mt-2 overflow-x-auto"><code>// Input malveillant
' OR '1'='1' --

// Requete vulnerable
"SELECT * FROM users WHERE email = '" + input + "'"

// Resultat : retourne tous les utilisateurs</code></pre>
    </div>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      <strong>Protection :</strong> Utilisez toujours des requetes parametrees (prepared statements)
      et un ORM. Ne concatenez jamais les inputs utilisateurs dans vos requetes.
    </p>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">2. Cross-Site Scripting (XSS)</h3>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      L'attaquant injecte du JavaScript malveillant qui s'execute dans le navigateur des victimes,
      permettant le vol de cookies, la redirection vers des sites frauduleux, etc.
    </p>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li><strong>XSS stocke</strong> : le script est enregistre en BDD (commentaires, profils)</li>
      <li><strong>XSS reflete</strong> : le script est dans l'URL</li>
      <li><strong>XSS DOM</strong> : le script manipule le DOM cote client</li>
    </ul>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      <strong>Protection :</strong> Echappez toutes les donnees affichees, utilisez Content-Security-Policy,
      et les frameworks modernes (React, Vue) echappent par defaut.
    </p>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">3. Cross-Site Request Forgery (CSRF)</h3>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      L'attaquant force un utilisateur authentifie a effectuer des actions non desirees
      (virement, changement de mot de passe) via un lien ou une image piege.
    </p>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      <strong>Protection :</strong> Utilisez des tokens CSRF, verifiez l'origine des requetes,
      et utilisez SameSite=Strict pour les cookies.
    </p>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Les bonnes pratiques fondamentales</h2>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">HTTPS obligatoire</h3>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Le certificat SSL/TLS chiffre les communications entre le navigateur et le serveur.
      Sans lui, les donnees transitent en clair et peuvent etre interceptees.
    </p>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li>Certificats gratuits avec Let's Encrypt</li>
      <li>Rediriger tout le HTTP vers HTTPS</li>
      <li>Activer HSTS pour forcer HTTPS</li>
    </ul>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">Gestion securisee des mots de passe</h3>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li>Ne jamais stocker les mots de passe en clair</li>
      <li>Utiliser bcrypt, scrypt ou Argon2 pour le hachage</li>
      <li>Imposer des mots de passe forts (12+ caracteres, mixte)</li>
      <li>Implementer une limite de tentatives de connexion</li>
      <li>Proposer l'authentification a deux facteurs (2FA)</li>
    </ul>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">Validation et sanitisation des inputs</h3>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Toute donnee provenant de l'utilisateur est potentiellement malveillante. Validez et
      nettoyez systematiquement.
    </p>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li>Validation cote serveur (obligatoire) + cote client (confort)</li>
      <li>Whitelist plutot que blacklist</li>
      <li>Echapper les caracteres speciaux</li>
      <li>Limiter la taille des inputs</li>
      <li>Verifier les types de fichiers uploades</li>
    </ul>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Les headers de securite</h2>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Les headers HTTP permettent de configurer des protections au niveau du navigateur.
    </p>
    <div class="bg-cream-100 p-6 rounded-xl mb-6">
      <pre class="text-sm text-charcoal-700 overflow-x-auto"><code>Content-Security-Policy: default-src 'self'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=()</code></pre>
    </div>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Securite des sessions et cookies</h2>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li><strong>HttpOnly</strong> : empeche l'acces JavaScript aux cookies</li>
      <li><strong>Secure</strong> : cookies transmis uniquement en HTTPS</li>
      <li><strong>SameSite=Strict</strong> : protection contre CSRF</li>
      <li>Expiration raisonnable des sessions</li>
      <li>Regenerer l'ID de session apres authentification</li>
    </ul>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Maintenir son site securise</h2>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">Mises a jour regulieres</h3>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      Les failles de securite sont decouvertes regulierement. Maintenez a jour :
    </p>
    <ul class="list-disc list-inside text-charcoal-600 mb-6 space-y-2">
      <li>Le systeme d'exploitation du serveur</li>
      <li>Le CMS (WordPress, etc.) et ses plugins</li>
      <li>Les dependances npm/composer</li>
      <li>Les frameworks et librairies</li>
    </ul>

    <h3 class="font-serif text-xl text-charcoal-800 mt-8 mb-4">Sauvegardes regulieres</h3>
    <p class="text-charcoal-600 leading-relaxed mb-6">
      En cas d'attaque ou d'incident, les sauvegardes sont votre dernier recours.
      Automatisez-les et testez regulierement la restauration.
    </p>

    <h2 class="font-serif text-2xl sm:text-3xl text-charcoal-800 mt-12 mb-6">Checklist securite</h2>
    <div class="bg-cream-100 p-6 rounded-xl mb-6">
      <ul class="text-charcoal-600 space-y-2">
        <li>[ ] HTTPS actif sur tout le site</li>
        <li>[ ] Headers de securite configures</li>
        <li>[ ] Mots de passe haches avec bcrypt/Argon2</li>
        <li>[ ] Requetes parametrees (pas de concatenation SQL)</li>
        <li>[ ] Validation serveur de tous les inputs</li>
        <li>[ ] Cookies securises (HttpOnly, Secure, SameSite)</li>
        <li>[ ] Dependances a jour</li>
        <li>[ ] Sauvegardes automatiques testees</li>
        <li>[ ] Limite de tentatives de connexion</li>
        <li>[ ] Logs et monitoring actifs</li>
      </ul>
    </div>

    <div class="bg-charcoal-800 text-white p-8 rounded-2xl mt-12">
      <h3 class="font-serif text-xl mb-4">En resume</h3>
      <p class="text-charcoal-200 leading-relaxed">
        La securite web est un processus continu, pas une action ponctuelle. Appliquez les bonnes
        pratiques des le debut du developpement, maintenez vos dependances a jour et restez informe
        des nouvelles vulnerabilites. En cas de doute, faites appel a un expert pour un audit.
      </p>
    </div>
  `,
};
