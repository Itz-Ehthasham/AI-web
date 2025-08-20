import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Blog() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Insights and updates from our team
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Blog posts will be added here.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
