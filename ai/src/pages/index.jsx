import Navbar from '@/components/Navbar';
import Hero from '@/components/hero/Hero';
import PortfolioHorizontal from '@/components/PortfolioHorizontal';
import TechStackMarquee from '@/components/TechStack/TechStackMarquee';
import FloatingCTA from '@/components/FloatingCTA';
import Contact from './contact';
import ExcellenceSection from '@/components/expertise/ExcellenceSection';
import Footer from '@/components/Footer';
import CoreStrengths from '@/components/expertise/CoreStrengths';
import StatsSection from '../components/expertise/StatsSection';
import CoreValues from '../components/about/CoreValues';
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <StatsSection />
      <PortfolioHorizontal />
      <ExcellenceSection />
      <TechStackMarquee />
      <CoreStrengths />
      <FloatingCTA />
      <CoreValues />
      <Contact />
      
    </div>
  );
}
