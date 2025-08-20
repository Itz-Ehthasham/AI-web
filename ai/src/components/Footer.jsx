const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">AI Developers</h3>
            <p className="text-gray-400 text-sm">
              Building the future with AI and innovative technology
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="/expertise" className="text-gray-400 hover:text-white transition-colors">
              Expertise
            </a>
            <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 AI Developers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
