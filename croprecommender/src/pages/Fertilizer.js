import React, { useState } from "react";
import bg2 from "../img/bg1.jpg";

function Form({ onSubmit, isLoading }) {
  const [formValues, setFormValues] = useState({
    Temparature: null, Humidity: null, Moisture: null, Nitrogen: null, Potassium: null, Phosphorous: null, Soil_Type: "Loamy", Crop_Type: "Sugarcane",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-card overflow-hidden border border-slate-200/50 shadow-xl">
        <form onSubmit={handleSubmit} className="p-8 sm:p-12 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Fertilizer <span className="text-gradient">Recommendation</span> Model
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Enter the soil parameters to get the best fertilizer suggestion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {[
              { label: 'Nitrogen (N)', name: 'Nitrogen', placeholder: 'Enter Nitrogen', step: '0', type: 'number' },
              { label: 'Phosphorus (P)', name: 'Phosphorous', placeholder: 'Enter Phosphorus', step: '1', type: 'number' },
              { label: 'Potassium (K)', name: 'Potassium', placeholder: 'Enter Potassium', step: '1', type: 'number' },
              { label: 'Temperature (°C)', name: 'Temparature', placeholder: 'Enter Temperature', step: '0.1', type: 'number' },
              { label: 'Humidity (%)', name: 'Humidity', placeholder: 'Enter Humidity', step: '0', type: 'number' },
              { label: 'Moisture', name: 'Moisture', placeholder: 'Enter Moisture', step: '0', type: 'number' },
            ].map((field, idx) => (
              <div key={idx} className="col-span-1">
                <label htmlFor={field.name} className="block text-slate-700 py-2 font-bold text-sm tracking-wide">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="input-field"
                  required
                  step={field.step}
                  onChange={handleInputChange}
                />
              </div>
            ))}
            
            <div className="col-span-1">
              <label htmlFor="Soil_Type" className="block text-slate-700 py-2 font-bold text-sm tracking-wide">
                Soil Type
              </label>
              <select
                id="Soil_Type"
                name="Soil_Type"
                className="input-field cursor-pointer"
                required
                onChange={handleInputChange}
              >
                <option value="Loamy">Loamy</option>
                <option value="Sandy">Sandy</option>
                <option value="Clayey">Clayey</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
              </select>
            </div>
            
            <div className="col-span-1">
              <label htmlFor="Crop_Type" className="block text-slate-700 py-2 font-bold text-sm tracking-wide">
                Crop Type
              </label>
              <select
                id="Crop_Type"
                name="Crop_Type"
                className="input-field cursor-pointer"
                required
                onChange={handleInputChange}
              >
                {["Sugarcane", "Cotton", "Millets", "Paddy", "Pulses", "Wheat", "Tobacco", "Barley", "Oil seeds", "Ground Nuts", "Maize"].map(crop => (
                  <option key={crop} value={crop}>{crop}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-10 flex justify-center relative z-10">
            <button type="submit" className="btn-primary w-full sm:w-auto text-lg px-10 py-4" disabled={isLoading}>
              {isLoading ? (
                <>
                  <svg className="w-5 h-5 mr-3 animate-spin text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Processing...
                </>
              ) : 'Get Recommendation'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ResultCard({ result, onBack }) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-card overflow-hidden flex flex-col md:flex-row relative animate-fade-in-up border border-slate-200/50 shadow-2xl">
        <div className="w-full md:w-1/2 h-64 md:h-auto relative group">
          <img src={bg2} alt="Agriculture field" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent flex items-end p-8">
            <h3 className="text-white text-3xl font-bold tracking-wide">Prediction Result</h3>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-white/80 backdrop-blur-sm relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl"></div>
          <div className="mb-8 relative z-10">
            <span className="text-sm font-bold tracking-widest text-teal-600 uppercase mb-2 block">
              Recommended Fertilizer
            </span>
            <div className="text-5xl font-extrabold text-slate-900 capitalize bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600 pb-2 drop-shadow-sm">
              {result}
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mb-10 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative z-10">
            <strong>Note:</strong> The result predicted may not be perfectly accurate. It is an approximate choice that may vary depending upon several factors. This predicted outcome is based on past data and chosen with limited factors.
          </p>
          <button className="btn-secondary self-start relative z-10 shadow-md hover:shadow-lg" onClick={onBack}>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            Back to Form
          </button>
        </div>
      </div>
    </div>
  );
}

function Fertilizer() {
  const [response, setResponse] = useState(null);
  const [showForm, setShowForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (formValues) => {
    setIsLoading(true);
    try {
      const response = await fetch("https://agrosphere-fertilizer-api.onrender.com/predict", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });
      const data = await response.json();
      setResponse(data.result);
      setShowForm(false);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setResponse(null);
    setShowForm(true);
  };

  return (
    <>
      {showForm ? <Form onSubmit={handleFormSubmit} isLoading={isLoading} /> : <ResultCard result={response} onBack={handleBack} />}
    </>
  );
}
export default Fertilizer;
