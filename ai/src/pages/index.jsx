import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PortfolioHorizontal from '@/components/PortfolioHorizontal';
import TechStackMarquee from '@/components/TechStackMarquee';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <PortfolioHorizontal />
      <TechStackMarquee />
      <FloatingCTA />
      <Footer />
    </div>
  );
}
