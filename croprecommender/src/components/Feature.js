import React from 'react';

function Feature() {
  const features = [
    {
      id: 'croprecommender',
      icon: '🌱',
      title: 'Crop Recommendation',
      desc: 'Discover the best crop to plant based on soil conditions and environment.',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'fertilizer',
      icon: '🧪',
      title: 'Fertilizer Optimization',
      desc: 'Get exact fertilizer requirements for maximum yield and minimum waste.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'plantdisease',
      icon: '🍃',
      title: 'Plant Disease Detection',
      desc: 'Instantly diagnose crop diseases using our advanced AI models.',
      color: 'from-emerald-400 to-emerald-600'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-brand font-bold text-sm tracking-widest uppercase mb-3">Our Services</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Powerful AI Models for <span className="text-gradient">Precision Agriculture</span>
        </h1>
        <p className="text-lg text-slate-600">
          Try our interactive models below to experience the power of AI in farming.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {features.map((feature, idx) => (
          <div key={idx} className="glass-card relative overflow-hidden group flex flex-col h-full bg-white">
            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${feature.color}`}></div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center text-4xl mb-8 shadow-lg transform group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">{feature.desc}</p>
              
              <a href={`#${feature.id}`} className="mt-auto inline-flex items-center text-brand font-semibold hover:text-brand-dark transition-colors group/btn">
                Try Now 
                <svg className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
            
            {/* Decorative background blob */}
            <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.color} opacity-5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
