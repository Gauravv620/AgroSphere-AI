import "./App.css";
import React from "react";
import Header from "./header";
import Landing from "./landing";
import Des from "./des";
import Feature from "./feature";
import Croprecommend from "./croprecommend";
import Plantdis from "./plantdis";
import Fertilizer from "./fertilizer";
import Contact from "./contact";
import Footer from "./footer";

function App() {
  return (
    <div id="top" className="min-h-screen flex flex-col">
      <Header />

      <Landing />

      <section id="about" className="py-20 bg-slate-50">
        <Des />
      </section>

      <section id="features" className="py-20">
        <Feature />
      </section>

      <section id="croprecommender" className="py-20">
        <Croprecommend />
      </section>

      <section id="fertilizer" className="py-20 bg-slate-50">
        <Fertilizer />
      </section>

      <section id="plantdisease" className="py-20">
        <Plantdis />
      </section>

      <section id="contact" className="py-20 bg-slate-50">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;