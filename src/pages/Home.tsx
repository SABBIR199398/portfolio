import React from "react";

const Home: React.FC = () => (
  <main className="bg-[#f7fafd] min-h-screen font-sans">
    {/* Hero Section */}
    <section className="flex flex-col md:flex-row items-center justify-between px-6 pt-16 max-w-5xl mx-auto">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Hi, I'm <span className="text-blue-700">Sabbir Sheikh</span> <span className="inline-block">👋</span>
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-700 mb-2">
          React Native Developer | Mobile App Specialist
        </h2>
        <p className="text-gray-600 mb-6 max-w-lg">
          Experienced in building scalable, secure, and beautiful mobile applications for telemedicine, education, transportation, and more. I love collaborating with teams and clients to deliver seamless user experiences.
        </p>
        <div className="flex gap-4 mb-8">
          <a href="#projects" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition">View Projects</a>
          <a href="#contact" className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">Contact Me</a>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
        {/* Illustration placeholder */}
        <div className="w-64 h-64 bg-blue-100 rounded-full flex items-center justify-center">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <rect x="20" y="40" width="80" height="60" rx="10" fill="#2563eb"/>
            <rect x="35" y="55" width="50" height="10" rx="3" fill="#fff"/>
            <rect x="35" y="70" width="30" height="10" rx="3" fill="#fff"/>
          </svg>
        </div>
      </div>
    </section>

    {/* About Me */}
    <section className="px-6 py-10 max-w-5xl mx-auto mb-6">
      <h3 className="text-2xl font-bold mb-4 text-gray-900">About Me</h3>
      <p className="text-gray-700 mb-6">
       I’m a passionate Senior React Native Developer with extensive experience in mobile and front-end development. I’ve worked remotely and on-site, delivering high-quality apps for healthcare, education, transportation, and entertainment. My focus is on performance, security, and user experience.
      </p>
      <div className="flex flex-wrap gap-3">
        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg font-medium flex items-center gap-2">React Native</span>
        <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-lg font-medium flex items-center gap-2">Firebase</span>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-medium flex items-center gap-2">Kotlin</span>
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg font-medium flex items-center gap-2">iOS</span>
      </div>
    </section>

    {/* Featured Projects */}
    <section id="projects" className="max-w-5xl mx-auto px-6 mb-12">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Featured Projects</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Project One */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="8" y="16" width="32" height="24" rx="5" fill="#2563eb"/>
              <rect x="14" y="22" width="20" height="4" rx="2" fill="#fff"/>
            </svg>
          </div>
          <h4 className="font-semibold text-lg mb-2 text-gray-900">10rx Telemedicine</h4>
          <p className="text-gray-600 mb-4 text-center">Doctor Consultation app with live chat and video conferencing. Focused on secure, seamless operation, real-time communication, and UI enhancements for telemedicine.</p>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-medium text-sm">React Native</span>
            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-medium text-sm">Typescript</span>
          </div>
        </div>
        {/* Project Two */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="8" y="16" width="32" height="24" rx="5" fill="#2563eb"/>
              <circle cx="24" cy="28" r="6" fill="#fff"/>
            </svg>
          </div>
          <h4 className="font-semibold text-lg mb-2 text-gray-900">Student App</h4>
          <p className="text-gray-600 mb-4 text-center">Education platform for course materials, tests, precap sessions, and homework management. Enables interactive assessments and collaboration between students and educators.</p>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-medium text-sm">React Native</span>
            <span className="bg-yellow-50 text-yellow-700 px-2 py-1 rounded font-medium text-sm">Firebase</span>
          </div>
        </div>
        {/* Project Three */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="8" y="16" width="32" height="24" rx="5" fill="#2563eb"/>
              <rect x="16" y="24" width="16" height="8" rx="2" fill="#fff"/>
            </svg>
          </div>
          <h4 className="font-semibold text-lg mb-2 text-gray-900">Saarthi Digital Cab Service</h4>
          <p className="text-gray-600 mb-4 text-center">Taxi service app for Android/iOS. Supervisor and Driver modules, trip management, and Map API integration for route optimization.</p>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-medium text-sm">Android(JAVA)</span>
          </div>
        </div>


        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="8" y="16" width="32" height="24" rx="5" fill="#2563eb"/>
              <rect x="16" y="24" width="16" height="8" rx="2" fill="#fff"/>
            </svg>
          </div>
          <h4 className="font-semibold text-lg mb-2 text-gray-900">Hungry Scholar App</h4>
          <p className="text-gray-600 mb-4 text-center">Multi-restaurant food ordering system with menu browsing, order customization, and secure Payeezy payments. Smooth operation for customers and partners.</p>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-medium text-sm">Android(JAVA)</span>
          </div>
        </div>
      </div>
    </section>

    {/* Skills */}
    <section className="max-w-5xl mx-auto px-6 mb-16">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Skills</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <span className="font-medium text-blue-700">React Native</span>
            <div className="w-full bg-blue-50 rounded h-2 mt-1">
              <div className="bg-blue-600 h-2 rounded" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="mb-4">
            <span className="font-medium text-blue-700">TypeScript</span>
            <div className="w-full bg-blue-50 rounded h-2 mt-1">
              <div className="bg-blue-600 h-2 rounded" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="mb-4">
            <span className="font-medium text-blue-700">Kotlin</span>
            <div className="w-full bg-blue-50 rounded h-2 mt-1">
              <div className="bg-blue-600 h-2 rounded" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <span className="font-medium text-blue-700">IDT</span>
            <div className="w-full bg-blue-50 rounded h-2 mt-1">
              <div className="bg-blue-600 h-2 rounded" style={{ width: "70%" }}></div>
            </div>
          </div>
          <div className="mb-4">
            <span className="font-medium text-blue-700">Firebase</span>
            <div className="w-full bg-blue-50 rounded h-2 mt-1">
              <div className="bg-blue-600 h-2 rounded" style={{ width: "85%" }}></div>
            </div>
          </div>
          <div className="mb-4">
            <span className="font-medium text-blue-700">Notifee</span>
            <div className="w-full bg-blue-50 rounded h-2 mt-1">
              <div className="bg-blue-600 h-2 rounded" style={{ width: "60%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Home;