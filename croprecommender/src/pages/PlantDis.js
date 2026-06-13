import React from 'react';

function Plantdis() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="glass-card max-w-3xl mx-auto p-12 text-center relative overflow-hidden group border border-slate-200/60 shadow-xl">
        <div className="absolute inset-0 bg-brand/5 blur-3xl rounded-full scale-150 transform group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10">
          <div className="w-24 h-24 mx-auto bg-brand/10 rounded-3xl flex items-center justify-center text-5xl mb-8 shadow-inner animate-float border border-brand/20">
            🍃
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl mb-6">
            Plant Disease <span className="text-gradient">Detection</span>
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-600 font-semibold text-sm mb-8 border border-amber-200 shadow-sm">
            <svg className="w-4 h-4 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            Model Training in Progress
          </div>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            This feature is currently under development. Our Deep Learning models are being rigorously trained on a large dataset of plant leaves to bring you highly accurate disease detection and actionable treatment guidance. Check back soon!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Plantdis;
