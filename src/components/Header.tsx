import React, { useState, useEffect } from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled
        ? 'glassmorphism-dark backdrop-blur-xl py-3 border-b border-white/5'
        : 'bg-transparent py-5'
        } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">CR</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-white">Cesar Ruiz</h1>
              <p className="text-xs text-gray-400">Backend Developer</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {[
              { href: '#about', label: 'Sobre mí' },
              { href: '#skills', label: 'Habilidades' },
              { href: '#projects', label: 'Proyectos' },
              { href: '#contact', label: 'Contacto' }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-white/5 hover:from-blue-500/20 hover:to-purple-600/20 transition-all duration-300">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 
