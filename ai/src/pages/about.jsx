import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/about/AnimatedBackground';
import HeroSection from '@/components/about/HeroSection';
import MissionStatement from '@/components/about/MissionStatement';
import TeamGrid from '@/components/about/TeamGrid';
import CoreValues from '@/components/about/CoreValues';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <Navbar />
      
      <main className="pt-20 pb-16 overflow-hidden">
        
        <AnimatedBackground />

        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <HeroSection />

          
          <MissionStatement />

          
          <TeamGrid />

          
          <CoreValues />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}