import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glassmorphism-dark p-6 rounded-2xl border border-white/5">
          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-xs">
              © {currentYear} Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 