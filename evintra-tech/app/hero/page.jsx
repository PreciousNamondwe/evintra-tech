export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-[#333333] to-gray-900 text-white overflow-hidden">
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-[#bcfd4c]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-[#8cdb1f]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8">

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold leading-tight">
                Innovative{' '}
                <span className="text-transparent bg-gradient-to-r from-[#bcfd4c] to-[#8cdb1f] bg-clip-text">
                  Technology
                </span>
                <br />
                Solutions for
                <br />
                Tomorrow
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-1xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We deliver cutting-edge technology solutions that drive business growth 
                and digital transformation. Experience the future with EvintraTech.
              </p>

              <br className="hidden sm:block"/>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a 
                  href="#contact" 
                  className="group relative bg-gradient-to-r from-[#bcfd4c] to-[#8cdb1f] text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-500 transform hover:-translate-y-1 text-base sm:text-lg overflow-hidden"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="#services" 
                  className="group border-2 border-white/30 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-500 transform hover:-translate-y-1 text-base sm:text-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    Our Services
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>
              <br className="hidden sm:block"/>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-12 mt-8 sm:mt-12 border-t border-white/20">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-[#bcfd4c] mb-1 sm:mb-2">50+</div>
                  <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Projects</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-[#bcfd4c] mb-1 sm:mb-2">15+</div>
                  <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Clients</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-[#bcfd4c] mb-1 sm:mb-2">5+</div>
                  <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Years</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] flex items-center justify-center">
              {/* Main Computer Setup */}
              <div className="relative">
                {/* Computer Screen - Straight (no rotation) */}
                <div className="relative w-48 h-36 sm:w-64 sm:h-48 md:w-72 md:h-54 lg:w-80 lg:h-60 xl:w-96 xl:h-72 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 border-gray-600">
                  {/* Screen Bezel */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-800 rounded-2xl p-2 sm:p-3">
                    {/* Screen Content */}
                    <div className="w-full h-full bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
                      {/* Code Editor */}
                      <div className="p-3 sm:p-4 md:p-6 font-mono text-xs sm:text-sm h-full flex flex-col">
                        <div className="flex space-x-1 sm:space-x-2 mb-2 sm:mb-4">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-[#bcfd4c] text-xs sm:text-sm mb-2 sm:mb-4">// Building innovative solutions</div>
                        <div className="space-y-1 sm:space-y-2 text-gray-400 flex-1">
                          <div className="text-xs sm:text-sm"><span className="text-blue-400">const</span> <span className="text-yellow-300">innovation</span> = <span className="text-green-400">"future"</span>;</div>
                          <div className="text-xs sm:text-sm"><span className="text-purple-400">export</span> <span className="text-blue-400">default</span> <span className="text-yellow-300">technology</span>;</div>
                          <div className="mt-2 sm:mt-4 text-xs sm:text-sm"><span className="text-blue-400">function</span> <span className="text-yellow-300">createFuture</span>() {'{'}</div>
                          <div className="ml-2 sm:ml-4 text-xs sm:text-sm"><span className="text-purple-400">return</span> <span className="text-green-400">"success"</span>;</div>
                          <div className="text-xs sm:text-sm">{'}'}</div>
                        </div>
                      </div>
                      
                      {/* Active Cursor */}
                      <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 w-1.5 h-3 sm:w-2 sm:h-4 bg-[#bcfd4c] animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Screen Glow */}
                  <div className="absolute -inset-4 sm:-inset-6 lg:-inset-8 bg-gradient-to-r from-[#bcfd4c]/20 to-transparent rounded-3xl blur-2xl sm:blur-3xl -z-10"></div>
                </div>

                {/* Person Silhouette */}
                <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gray-300 rounded-full shadow-lg"></div>
                  <div className="absolute top-8 sm:top-12 lg:top-16 left-1/2 transform -translate-x-1/2 w-12 h-14 sm:w-16 sm:h-18 lg:w-20 lg:h-24 bg-gray-400 rounded-t-2xl shadow-lg"></div>
                  <div className="absolute top-12 sm:top-16 lg:top-20 left-1/2 transform -translate-x-1/2 w-32 h-2 sm:w-40 sm:h-3 lg:w-48 lg:h-3 bg-gray-500 rounded-full shadow-lg"></div>
                </div>

                {/* Desk */}
                <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-2 sm:w-56 sm:h-3 lg:w-64 lg:h-3 bg-gray-600 rounded-full shadow-lg"></div>
              </div>

              {/* Floating Tech Elements with Actual Icons */}
              <div className="absolute top-8 sm:top-12 md:top-18 right-2 sm:right-4 p-3 sm:p-4 animate-bounce">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2 text-[#bcfd4c]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3v10h8V3h-8zM3 21h8v-6H3v6zM3 11h8V3H3v8z"/>
                </svg>
                <h4 className="font-semibold text-xs sm:text-sm text-white">Fast</h4>
              </div>
              
              <div className="absolute bottom-24 sm:bottom-32 left-2 sm:left-4 p-3 sm:p-4 animate-bounce delay-1000">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2 text-[#bcfd4c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
                <h4 className="font-semibold text-xs sm:text-sm text-white">Secure</h4>
              </div>
              
              <div className="absolute top-1/2 right-4 sm:right-8 lg:right-12 p-3 sm:p-4 animate-bounce delay-2000">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2 text-[#bcfd4c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <h4 className="font-semibold text-xs sm:text-sm text-white">Innovative</h4>
              </div>

              {/* Additional Floating Icons */}
              <div className="absolute top-16 sm:top-20 left-4 sm:left-6 lg:left-8 p-2 sm:p-3 animate-bounce delay-1500">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#bcfd4c]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>

              <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-6 lg:right-8 p-2 sm:p-3 animate-bounce delay-500">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#bcfd4c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                </svg>
              </div>

              {/* Connection Lines */}
              <div className="absolute top-16 sm:top-20 right-12 sm:right-16 lg:right-20 w-12 sm:w-16 lg:w-20 h-0.5 bg-[#bcfd4c]/30 rounded-full"></div>
              <div className="absolute bottom-28 sm:bottom-36 lg:bottom-40 left-12 sm:left-16 lg:left-20 w-10 sm:w-12 lg:w-16 h-0.5 bg-[#bcfd4c]/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}