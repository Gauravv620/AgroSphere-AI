import React from "react";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Des from "./components/Des";
import Feature from "./components/Feature";
import Croprecommend from "./pages/CropRecommend";
import Plantdis from "./pages/PlantDis";
import Fertilizer from "./pages/Fertilizer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="top" className="min-h-screen flex flex-col font-sans text-slate-900 selection:bg-brand selection:text-white">
      <Header />

      <main className="flex-grow">
        <Landing />

        <section id="about" className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-brand/5 skew-y-3 transform -z-10"></div>
          <Des />
        </section>

        <section id="features" className="py-24 md:py-32 relative z-10">
          <Feature />
        </section>

        <section id="croprecommender" className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-xl border-y border-white/40 -z-10"></div>
          <Croprecommend />
        </section>

        <section id="fertilizer" className="py-24 md:py-32 relative z-10">
          <Fertilizer />
        </section>

        <section id="plantdisease" className="py-24 md:py-32 relative">
           <div className="absolute inset-0 bg-slate-850 text-white transform -z-10"></div>
          <Plantdis />
        </section>

        <section id="contact" className="py-24 md:py-32 relative z-10">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;