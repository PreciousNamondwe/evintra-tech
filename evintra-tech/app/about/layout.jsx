export default function Layout() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-gray-900 text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#bcfd4c]/10 rounded-full blur-2 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 right-20 w-96 h-96 bg-[#8cdb1f]/10 rounded-full blur-2 animate-[float_8s_ease-in-out_infinite_delay-2000ms]"></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-2 animate-[float_8s_ease-in-out_infinite_delay-4000ms]"></div>
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-[#bcfd4c]/5 rounded-full blur-2xl animate-pulse"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 mb-6 shadow-2xl">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-[#bcfd4c] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#8cdb1f] rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-[#bcfd4c] rounded-full animate-pulse delay-600"></div>
            </div>
          </div>
          
          <h2 className="text-2 sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6">
            About{' '}
            <span className="text-transparent bg-gradient-to-r from-[#bcfd4c] via-[#8cdb1f] to-[#bcfd4c] bg-clip-text bg-[length:200%_200%] animate-[gradient_3s_ease_infinite]">
              EvintraTech
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#bcfd4c] to-[#8cdb1f] rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
            Pioneering the future of digital transformation with cutting-edge technology solutions 
            that <span className="text-white font-medium">empower businesses</span> to thrive in the digital era.
          </p>
        </div>
        <br/>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-start">
          {/* Main Content */}
          <div className="space-y-12">
            {/* Mission Statement */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#bcfd4c]/10 to-transparent rounded-2 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#bcfd4c] to-[#8cdb1f] rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25">
                      <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-2 font-bold text-white mb-4">Our Mission</h3>
                    <p className="text-lg lg:text-1xl text-gray-300 leading-relaxed font-light">
                      To revolutionize the digital landscape by delivering innovative, scalable, and secure technology 
                      solutions that drive measurable business growth and create lasting competitive advantages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br/>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "50+", label: "Projects", suffix: "Completed" },
                { number: "30+", label: "Happy", suffix: "Clients" },
                { number: "5+", label: "Years", suffix: "Experience" }
              ].map((stat, index) => (
                <div key={index} className="group text-center">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                    <div className="text-1xl lg:text-2xl font-black text-[#bcfd4c] mb-2">{stat.number}</div>
                    <div className="text-sm font-semibold text-white uppercase tracking-wider">{stat.label}</div>
                    <div className="text-xs text-gray-400 mt-1">{stat.suffix}</div>
                  </div>
                </div>
              ))}
            </div>
            <br/>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="group relative bg-gradient-to-r from-[#bcfd4c] to-[#8cdb1f] text-gray-900 font-bold px-8 py-4 rounded-2xl shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-500 transform hover:-translate-y-1 text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Start Your Journey
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="#services" 
                className="group border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-1 text-lg"
              >
                <span className="flex items-center justify-center gap-3">
                  Explore Services
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Vision & Values Cards */}
          <div className="space-y-8">
            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#8cdb1f]/10 to-transparent rounded-2 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#8cdb1f] to-[#bcfd4c] rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25">
                      <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-2 font-bold text-white mb-4">Our Vision</h3>
                    <p className="text-lg lg:text-1xl text-gray-300 leading-relaxed font-light">
                      To be the world's most trusted technology innovation partner, shaping the future 
                      of digital transformation and setting new standards for excellence in every industry we touch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br/>

            {/* Values Card */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#bcfd4c]/10 to-[#8cdb1f]/10 rounded-2 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#bcfd4c] to-[#8cdb1f] rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25">
                      <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Our Values</h3>
                    <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
                      Innovation, integrity, and impact drive everything we do. We believe in building 
                      lasting partnerships through transparency, excellence, and a relentless pursuit of perfection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br/>

            {/* Expertise Card */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#8cdb1f]/10 to-[#bcfd4c]/10 rounded-2 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#8cdb1f] to-[#bcfd4c] rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25">
                      <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2 lg:text-3xl font-bold text-white mb-4">Our Expertise</h3>
                    <p className="text-lg lg:text-1xl text-gray-300 leading-relaxed font-light">
                      From AI-driven solutions to cloud infrastructure, our team of experts delivers 
                      cutting-edge technology that transforms businesses and drives sustainable growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}