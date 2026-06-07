function Landing() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 text-center">

        {/* Hero Section */}

        <h1 className="mx-auto max-w-5xl text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
          SMART
          <span className="text-green-600"> AGRICULTURE </span>
          POWERED BY
          <span className="text-green-600"> AI</span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-600 leading-relaxed">
          <strong>AgroSphere AI</strong> is an intelligent agriculture platform
          that leverages Machine Learning and Deep Learning to provide Crop
          Recommendations, Fertilizer Suggestions, and Plant Disease Detection
          for smarter and more sustainable farming.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#features"
            className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-green-700 transition"
          >
            Explore Features
          </a>
        </div>

        {/* Feature Cards */}

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Crop Recommendation */}

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition duration-300">
            <div className="text-5xl mb-4">🌱</div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Crop Recommendation
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Analyze soil nutrients and environmental conditions to
              recommend the most suitable crop for maximum yield and
              productivity.
            </p>
          </div>

          {/* Fertilizer Suggestion */}

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition duration-300">
            <div className="text-5xl mb-4">🧪</div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Fertilizer Optimization
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Identify nutrient deficiencies and excesses in soil and
              receive intelligent fertilizer recommendations.
            </p>
          </div>

          {/* Disease Detection */}

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition duration-300">
            <div className="text-5xl mb-4">🍃</div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Disease Detection
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Upload plant leaf images and detect diseases instantly
              using advanced Deep Learning models with treatment guidance.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Landing;