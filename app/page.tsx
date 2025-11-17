import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import ProofOfWork from '@/components/ProofOfWork';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ProofOfWork />
      <Services />
      <Contact />
    </div>
  );
}
