import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import ProofOfWork from '@/components/ProofOfWork';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <ProofOfWork />
      <Services />
      <Contact />
    </div>
  );
}
