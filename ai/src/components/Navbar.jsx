'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import CTAButton from './CTAButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Expertise', href: '/expertise' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavClick = (href, name) => {
    console.log(`Navigating to: ${href} (${name})`);
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              onClick={() => handleNavClick('/', 'Home')}
            >
              AI Developers
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => handleNavClick(item.href, item.name)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Theme Toggle and Get in Touch */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <CTAButton 
                href="/contact" 
                variant="accent" 
                className="px-6 py-2 text-sm"
                aria-label="Get in touch"
                onClick={() => handleNavClick('/contact', 'Contact')}
              >
                Get in touch
              </CTAButton>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 cursor-pointer"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => handleNavClick(item.href, item.name)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <CTAButton 
                  href="/contact" 
                  variant="accent" 
                  className="w-full justify-center"
                  onClick={() => handleNavClick('/contact', 'Contact')}
                >
                  Get in touch
                </CTAButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
