function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌱</span>

            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                AgroSphere AI
              </h1>

              <p className="text-xs text-slate-500">
                Precision Agriculture Platform
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-10 font-medium">
            <a
              href="#about"
              className="text-slate-700 hover:text-green-600 transition"
            >
              About
            </a>

            <a
              href="#features"
              className="text-slate-700 hover:text-green-600 transition"
            >
              Features
            </a>

            <a
              href="#contact"
              className="text-slate-700 hover:text-green-600 transition"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#features"
            className="hidden md:block bg-green-600 text-white px-5 py-2 rounded-xl font-semibold hover:bg-green-700 transition shadow-md"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;