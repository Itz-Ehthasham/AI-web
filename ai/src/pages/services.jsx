import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/contact/ContactSection';
import ServicesHeader from '@/components/Services/ServicesHeader';
import StatsSection from '@/components/Services/StatsSection';
import ServicesGrid from '@/components/Services/ServicesGrid';
import { servicesData } from '@/data/servicesData';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      <ServicesHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <StatsSection />
        <ServicesGrid services={servicesData} />
      </div>

      <ContactSection />
      <Footer />
    </div>
  );
}