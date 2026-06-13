import React from 'react';

function Landing() {
  return (
    <div className="relative overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-40">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 mt-[-10%] w-[50rem] h-[50rem] bg-brand/10 rounded-full blur-[100px] opacity-70 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 mb-[-10%] w-[40rem] h-[40rem] bg-teal-500/10 rounded-full blur-[100px] opacity-70"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand-dark font-semibold text-sm mb-8 border border-brand/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand animate-ping"></span>
            Welcome to the future of farming
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl lg:text-8xl mb-8 leading-tight">
            SMART <span className="text-gradient">AGRICULTURE</span>
            <br />
            POWERED BY <span className="text-gradient">AI</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
            <strong>AgroSphere AI</strong> is an intelligent platform leveraging Machine Learning to provide Crop Recommendations, Fertilizer Suggestions, and Plant Disease Detection for sustainable farming.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#features" className="btn-primary text-lg px-8 py-4">
              Explore Features
            </a>
            <a href="#about" className="btn-secondary text-lg px-8 py-4">
              Learn More
            </a>
          </div>
        </div>

        {/* Feature Cards Showcase */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 text-left">
          {[
            { icon: '🌱', title: 'Crop Recommendation', desc: 'Analyze soil nutrients and environmental conditions to recommend the most suitable crop for maximum yield.' },
            { icon: '🧪', title: 'Fertilizer Optimization', desc: 'Identify nutrient deficiencies in soil and receive highly intelligent fertilizer recommendations.' },
            { icon: '🍃', title: 'Disease Detection', desc: 'Upload plant leaf images and detect diseases instantly using advanced Deep Learning models.' }
          ].map((card, idx) => (
            <div key={idx} className="glass-card p-8 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand/20">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;