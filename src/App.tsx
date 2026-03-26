import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingEmailButton from './components/FloatingEmailButton';
import Home from './pages/Home';
import CreationSite from './pages/CreationSite';
import SEO from './pages/SEO';
import Refonte from './pages/Refonte';
import Ecommerce from './pages/Ecommerce';
import Blog from './pages/Blog';
import CategoryPage from './pages/CategoryPage';
import ArticlePage from './pages/ArticlePage';
import FAQ from './pages/FAQ';
import RendezVous from './pages/RendezVous';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <FloatingEmailButton />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <main>
                  <Home />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="/creation-site-internet" element={<CreationSite />} />
          <Route path="/seo-referencement" element={<SEO />} />
          <Route path="/refonte-site" element={<Refonte />} />
          <Route path="/e-commerce" element={<Ecommerce />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<CategoryPage />} />
          <Route path="/blog/:categorySlug/:articleSlug" element={<ArticlePage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/rendez-vous" element={<RendezVous />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
