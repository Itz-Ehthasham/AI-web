import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import ExpertiseHeader from '@/components/expertise/ExpertiseHeader';
import CoreStrengths from '@/components/expertise/CoreStrengths';
import StatsSection from '@/components/expertise/StatsSection';
import ExcellenceSection from '@/components/expertise/ExcellenceSection';
import TechnologiesSection from '@/components/expertise/TechnologiesSection';

export default function Expertise() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      
      <main className="pt-20 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ExpertiseHeader />
          <CoreStrengths />
          <StatsSection />
          <ExcellenceSection />
          <TechnologiesSection />
        </div>
      </main>
      
      <ContactSection />
      <Footer />
    </div>
  );
}

