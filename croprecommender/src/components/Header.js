import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-3xl animate-float inline-block">🌱</span>
            <div>
              <h1 className="text-2xl font-bold text-gradient">
                AgroSphere AI
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                Precision Agriculture
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 font-medium">
            {['About', 'Features', 'CropRecommender', 'Fertilizer', 'PlantDisease', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-600 hover:text-brand transition-colors relative group"
              >
                {item.replace(/([A-Z])/g, ' $1').trim()}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-slate-600 hover:text-brand focus:outline-none p-2 rounded-lg hover:bg-slate-100/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute w-full glass-panel border-b border-slate-200/50 shadow-lg animate-fade-in-up origin-top">
          <div className="flex flex-col px-6 py-6 space-y-5">
            {['About', 'Features', 'CropRecommender', 'Fertilizer', 'PlantDisease', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-700 font-medium text-lg hover:text-brand hover:translate-x-2 transition-all flex items-center gap-3"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand opacity-0 hover:opacity-100 transition-opacity"></span>
                {item.replace(/([A-Z])/g, ' $1').trim()}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;