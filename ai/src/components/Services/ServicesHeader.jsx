import { Sparkles } from 'lucide-react';

const ServicesHeader = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
      
      <div className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We specialize in delivering <span className="font-semibold text-gray-900 dark:text-white">end-to-end technology solutions</span> with 
              a strong focus on <span className="font-semibold text-gray-900 dark:text-white">Artificial Intelligence</span> and <span className="font-semibold text-gray-900 dark:text-white">Full Stack Development</span>
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-4">
              Every project we build is intelligent, scalable, and user-friendly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHeader;