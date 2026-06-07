import gaurav from "./img/gaurav.png";

function Contact() {
  return (
    <>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="flex justify-center px-4">
        <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-5xl w-full">
          <div className="flex flex-col md:flex-row items-center gap-10">

            <img
              src={gaurav}
              alt="Gaurav Kumar"
              className="w-72 h-96 rounded-3xl object-cover shadow-lg"
            />

            <div className="flex-1">
              <h2 className="text-4xl font-bold text-slate-900">
                Gaurav Kumar
              </h2>

              <p className="text-green-600 text-xl font-semibold mt-2">
                Full Stack Developer & AI Enthusiast
              </p>

              <p className="text-slate-600 text-lg mt-6 leading-relaxed">
                Final Year Computer Science Engineering student at
                MIT ADT University, passionate about Artificial Intelligence,
                Machine Learning, Full Stack Development, and building
                impactful real-world solutions for agriculture and society.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
                >
                  LinkedIn
                </a>

                <a
                  href="mailto:yourmail@gmail.com"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                >
                  Email
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;