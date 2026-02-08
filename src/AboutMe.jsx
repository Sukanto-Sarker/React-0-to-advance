import React from "react";

export default function AboutMe() {
  return (
    <>
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Profile"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Hi 👋 I'm <span className="font-semibold text-gray-900">SUKANTO SARKER</span>, a passionate
            frontend developer who loves building clean, responsive, and user-friendly web
            applications. I enjoy turning complex problems into simple, beautiful solutions.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            My main focus is React, Tailwind CSS, and modern JavaScript. When I’m not coding, I’m
            usually learning something new, exploring design trends, or sipping coffee ☕.
          </p>

          {/* Stats / Highlights */}
          <div className="flex gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">2+</h3>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">20+</h3>
              <p className="text-sm text-gray-500">Projects</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">5+</h3>
              <p className="text-sm text-gray-500">Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br />
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/premium-photo/corporate-portrait-proud-with-business-man-office-start-professional-career-as-intern-company-confident-suit-with-smile-formal-employee-workplace-administration_590464-381909.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Profile"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Hi 👋 I'm <span className="font-semibold text-gray-900">RIDOY AHMRAD</span>, a passionate
            frontend developer who loves building clean, responsive, and user-friendly web
            applications. I enjoy turning complex problems into simple, beautiful solutions.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            My main focus is React, Tailwind CSS, and modern JavaScript. When I’m not coding, I’m
            usually learning something new, exploring design trends, or sipping coffee ☕.
          </p>

          {/* Stats / Highlights */}
          <div className="flex gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">2+</h3>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">20+</h3>
              <p className="text-sm text-gray-500">Projects</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">5+</h3>
              <p className="text-sm text-gray-500">Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br />
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxMUc_2D0YRzfmsaVQb5aE3pfTFXRowyngA&s"
            alt="Profile"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Hi 👋 I'm <span className="font-semibold text-gray-900">ROBIN MIAH</span>, a passionate
            frontend developer who loves building clean, responsive, and user-friendly web
            applications. I enjoy turning complex problems into simple, beautiful solutions.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            My main focus is React, Tailwind CSS, and modern JavaScript. When I’m not coding, I’m
            usually learning something new, exploring design trends, or sipping coffee ☕.
          </p>

          {/* Stats / Highlights */}
          <div className="flex gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">2+</h3>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">20+</h3>
              <p className="text-sm text-gray-500">Projects</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">5+</h3>
              <p className="text-sm text-gray-500">Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}
