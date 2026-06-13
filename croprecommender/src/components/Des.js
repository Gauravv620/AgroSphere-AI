import React from 'react';
import bg from "../img/bg-2.jpg";

function Des() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute inset-0 bg-brand/20 blur-3xl rounded-[3rem] transform -rotate-6 scale-105 z-0"></div>
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50 group">
            <img 
              alt="Intelligent Farming" 
              className="object-cover object-center w-full h-[400px] lg:h-[600px] group-hover:scale-110 transition duration-700 ease-in-out" 
              src={bg} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 inline-block">
                <p className="font-semibold text-lg">Empowering Farmers</p>
                <p className="text-sm opacity-90">Data-driven insights for optimal growth</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-brand font-bold text-sm tracking-widest uppercase mb-3 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-brand"></span>
            Why AgroSphere AI?
          </h2>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Intelligent Farming at Your <span className="text-gradient">Fingertips</span>
          </h1>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            AgroSphere AI is an integrated platform that combines three powerful machine learning models to assist farmers, hobbyists, and agriculture enthusiasts in making data-driven decisions.
          </p>
          
          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Crop Recommendation',
                desc: 'Takes user-input details such as nitrogen, potassium, phosphorous levels, temperature, humidity, and pH of the soil to predict the most suitable crop varieties for optimal yield.'
              },
              {
                step: '02',
                title: 'Fertilizer Optimization',
                desc: 'Identifies nutrient deficiencies based on your soil type and current nutrient levels, recommending the perfect balance of fertilizers needed for healthy growth.'
              },
              {
                step: '03',
                title: 'Plant Disease Detection',
                desc: 'Upload images of your plants, and the deep learning model will provide instant feedback, helping you take timely action to protect your crops from devastating diseases.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-6 group cursor-default">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand font-bold flex items-center justify-center border border-brand/20 group-hover:bg-brand group-hover:text-white transition-colors duration-300 shadow-sm">
                    {feature.step}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand transition-colors">{feature.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Des;
