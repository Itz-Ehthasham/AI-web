import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Use dynamic import for ContactSection - update the path
const ContactSection = dynamic(() => import('@/components/contact/ContactSection'), {
  ssr: true
});

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="pt-20 ">
        <ContactSection headline="Let's build something amazing together."/>
      </main>
      <Footer />
    </div>
  );
}


