import React from "react";

const Home: React.FC = () => (
  <main id="home" className="bg-slate-950 text-slate-100 min-h-screen">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-slate-200 border border-white/10 animate-fade-in-down" style={{animationDelay: '0.1s'}}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-glow"></span>
            Available for freelance & full-time roles
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight text-white animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Building premium <span className="text-sky-400">mobile</span> and <span className="text-sky-400">web</span> experiences.
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-xl animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            I’m Sabbir Sheikh, a Senior React Native Developer specializing in secure, scalable apps for healthcare, education, and transportation. I translate product vision into polished experiences with performance, security, and UX at the core.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <a href="#projects" className="bg-sky-400 text-slate-950 px-6 py-3 rounded-full font-semibold hover:bg-sky-300 transition duration-300 hover:scale-105 hover:shadow-lg">
              View Projects
            </a>
            <a href="#contact" className="border border-white/15 px-6 py-3 rounded-full font-semibold text-white hover:bg-white/10 transition duration-300 hover:scale-105 hover:border-white/30">
              Let’s Build Together
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-400 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <a href="https://www.linkedin.com/in/sabbir-sheikh-17079ba7/" target="_blank" rel="noreferrer" className="hover:text-white transition duration-300 hover:translate-y-[-2px]">LinkedIn</a>
            <a href="https://github.com/SABBIR199398" target="_blank" rel="noreferrer" className="hover:text-white transition duration-300 hover:translate-y-[-2px]">GitHub</a>
            <a href="mailto:sabbir.s1993@gmail.com" className="hover:text-white transition duration-300 hover:translate-y-[-2px]">Email</a>
            <a href="tel:+919824875322" className="hover:text-white transition duration-300 hover:translate-y-[-2px]">Call</a>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl animate-slide-in-right" style={{animationDelay: '0.3s'}}>
          <div className="bg-gradient-to-br from-sky-400/30 to-indigo-500/20 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-200">
              <div className="bg-white/10 rounded-xl p-4 hover:bg-white/15 transition duration-300 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <p className="text-2xl font-semibold text-white">8+</p>
                <p className="text-slate-300">Years Experience</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 hover:bg-white/15 transition duration-300 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                <p className="text-2xl font-semibold text-white">25+</p>
                <p className="text-slate-300">Apps Delivered</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 hover:bg-white/15 transition duration-300 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <p className="text-2xl font-semibold text-white">12</p>
                <p className="text-slate-300">Industries Served</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 hover:bg-white/15 transition duration-300 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
                <p className="text-2xl font-semibold text-white">99%</p>
                <p className="text-slate-300">Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <div className="flex items-center gap-3 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              React Native, React, TypeScript, Kotlin, Swift
            </div>
            <div className="flex items-center gap-3 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Secure integrations, MVVM, Redux, CI/CD
            </div>
            <div className="flex items-center gap-3 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
              Product discovery, UX collaboration, agile delivery
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10">
      <div className="animate-slide-in-left" style={{animationDelay: '0.2s'}}>
        <h2 className="text-3xl font-semibold text-white">About</h2>
        <p className="mt-4 text-slate-300 leading-relaxed">
          I help teams ship reliable, compliant mobile products with modern design systems and robust architecture. From discovery to launch, I focus on performance, secure data handling, and delightful interactions that raise retention and reduce churn.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="bg-white/10 text-slate-200 px-4 py-2 rounded-full text-sm hover:bg-white/20 transition duration-300 cursor-default">React Native</span>
          <span className="bg-white/10 text-slate-200 px-4 py-2 rounded-full text-sm hover:bg-white/20 transition duration-300 cursor-default">React.js</span>
          <span className="bg-white/10 text-slate-200 px-4 py-2 rounded-full text-sm hover:bg-white/20 transition duration-300 cursor-default">TypeScript</span>
          <span className="bg-white/10 text-slate-200 px-4 py-2 rounded-full text-sm hover:bg-white/20 transition duration-300 cursor-default">Firebase</span>
          <span className="bg-white/10 text-slate-200 px-4 py-2 rounded-full text-sm hover:bg-white/20 transition duration-300 cursor-default">Kotlin</span>
          <span className="bg-white/10 text-slate-200 px-4 py-2 rounded-full text-sm hover:bg-white/20 transition duration-300 cursor-default">iOS & Android</span>
        </div>
      </div>
      <div className="grid gap-4 animate-slide-in-right" style={{animationDelay: '0.3s'}}>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-white/10 transition duration-300">
          <h3 className="text-lg font-semibold text-white">Product Strategy</h3>
          <p className="text-slate-300 mt-2 text-sm">Translating requirements into sprint-ready roadmaps, wireframes, and experience flows.</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-white/10 transition duration-300">
          <h3 className="text-lg font-semibold text-white">Mobile Architecture</h3>
          <p className="text-slate-300 mt-2 text-sm">Scalable MVVM patterns, reliable API integrations, and automated CI/CD pipelines.</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-white/10 transition duration-300">
          <h3 className="text-lg font-semibold text-white">Security & Compliance</h3>
          <p className="text-slate-300 mt-2 text-sm">Encryption, secure storage, SSL pinning, and privacy-first engineering practices.</p>
        </div>
      </div>
    </section>

    <section id="projects" className="max-w-6xl mx-auto px-6 pb-16">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl font-semibold text-white">Featured Projects</h2>
          <p className="text-slate-300 mt-2">A selection of mobile products delivered with measurable impact.</p>
        </div>
        <a href="#contact" className="text-sm text-sky-300 hover:text-sky-200 transition duration-300">Request full case studies →</a>
      </div>
      <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[
          {
            title: "MediaApp",
            description:
              "A news platform  with personalized content feeds, offline reading, and push notifications. built with React Native and Razorpay integration for seamless subscriptions to events and premium content.",
            tags: ["React Native", "Firebase", "Push Notifications", "Razorpay" ],
          },
          {
            title: "HMI ONE App",
            description:
              "Telemedicine platform with video consultations, specialist booking,Health Screening, QR medical cards, Stripe payments, and a modular MVVM architecture.",
            tags: ["React Native", "Redux", "Stripe", "SSL Pinning"],
          },
          {
            title: "Student App",
            description:
              "Learning platform with assessments, live sessions, and collaborative homework workflows for students and educators.",
            tags: ["React Native", "Firebase", "Realtime"],
          },
          {
            title: "10rx Telemedicine",
            description:
              "Doctor consultation app with live chat, secure messaging, and optimized telehealth UX flows.",
            tags: ["React Native", "TypeScript", "Video"],
          },
          {
            title: "Saarthi Digital Cab Service",
            description:
              "Taxi service app supporting driver & supervisor modules, real-time trip management, and route optimization.",
            tags: ["Android", "Java", "Maps"],
          },
          {
            title: "Restaurant Ordering System",
            description:
              "Multi-restaurant ordering with menu customization, Payeezy payments, and secure API integrations.",
            tags: ["Android", "iOS", "REST APIs"],
          },
          {
            title: "PikyGo",
            description:
              "Marketplace app for USA that connect to various marketplace APIs to provide seamless shopping experience.",
            tags: ["IOS", "Figma", "Stripe"],
          },
        ].map((project) => (
          <div key={project.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col project-card hover:border-white/30">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-slate-300 mt-3 text-sm leading-relaxed flex-1">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-xs text-slate-200">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sky-300 text-sm hover:text-sky-200 transition duration-300 hover:translate-x-1"
            >
              Discuss this project
              <span aria-hidden="true">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>

    <section id="skills" className="max-w-6xl mx-auto px-6 pb-16">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
        <div>
          <h2 className="text-3xl font-semibold text-white">Skills & Tooling</h2>
          <p className="text-slate-300 mt-3">
            Balanced expertise across product strategy, mobile engineering, and delivery.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            {["React Native", "React", "TypeScript", "Redux", "Firebase", "Kotlin", "Swift", "Node.js"].map(
              (skill) => (
                <div key={skill} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  {skill}
                </div>
              )
            )}
          </div>
        </div>
        <div className="space-y-5">
          {[
            { label: "React Native", value: 92 },
            { label: "TypeScript", value: 86 },
            { label: "Kotlin", value: 80 },
            { label: "Firebase", value: 84 },
            { label: "Performance & Security", value: 88 },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>
              <div className="mt-2 h-2 bg-white/10 rounded-full">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="contact" className="max-w-6xl mx-auto px-6 pb-20">
      <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-white">Let’s build your next release</h2>
            <p className="text-slate-300 mt-3">
              Share your product goals and timelines. I’ll respond within 24 hours with a plan and next steps.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="mailto:sabbir.sheikh@example.com"
                className="bg-sky-400 text-slate-950 px-6 py-3 rounded-full font-semibold hover:bg-sky-300 transition"
              >
                Email Me
              </a>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noreferrer"
                className="border border-white/20 px-6 py-3 rounded-full font-semibold text-white hover:bg-white/10 transition"
              >
                Book a Call
              </a>
            </div>
          </div>
          <div className="space-y-4 text-sm text-slate-300">
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-white font-semibold">Location</p>
              <p className="mt-1">Remote • Rajkot, Kolkata</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-white font-semibold">Contact</p>
              <p className="mt-1">sabbir.s1993@gmail.com</p>
              <p className="mt-1">+919824875322</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-white font-semibold">Social</p>
              <div className="mt-2 flex gap-3">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
                <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-white">Dribbble</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-500">
        <p>© 2026 Sabbir Sheikh. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#home" className="hover:text-white">Back to top</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  </main>
);

export default Home;