function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-green-500">
              AgroSphere AI
            </h2>

            <p className="mt-2 text-gray-400 text-sm max-w-md">
              AI-Powered Precision Agriculture Platform for Crop
              Recommendation, Fertilizer Optimization, and Plant Disease
              Detection.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex gap-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-green-500 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-green-500 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:gaurav@example.com"
              className="text-gray-400 hover:text-green-500 transition"
            >
              Email
            </a>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          © 2026 AgroSphere AI. All Rights Reserved.
          <br />
          Developed by Gaurav Kumar
        </div>
      </div>
    </footer>
  );
}

export default Footer;