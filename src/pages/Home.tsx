import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Philosophy from '../components/Philosophy';
import Stories from '../components/Stories';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';

export default function Home() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get('scroll');
    if (scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [searchParams]);

  return (
    <>
      <Hero />
      <Services />
      <Philosophy />
      <Stories />
      <HowItWorks />
      <CTA />
    </>
  );
}
