export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices for optimal performance and user experience.',
      features: ['React/Next.js', 'Responsive Design', 'Performance Optimization']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile apps for iOS and Android with seamless user experiences.',
      features: ['iOS & Android', 'Cross-Platform', 'Native Performance']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and deployment solutions for your business growth.',
      features: ['AWS/Azure/GCP', 'Auto Scaling', 'Cost Optimization']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI & ML',
      description: 'Artificial Intelligence and Machine Learning solutions to automate and optimize your operations.',
      features: ['Machine Learning', 'AI Integration', 'Data Analysis']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Cyber Security',
      description: 'Comprehensive security solutions to protect your digital assets and ensure data privacy.',
      features: ['Threat Protection', 'Data Encryption', 'Security Audits']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights and business intelligence for informed decisions.',
      features: ['Business Intelligence', 'Real-time Analytics', 'Data Visualization']
    }
  ]

  return (
    <section id="services" className="min-h-screen bg-gradient-to-br from-[#333333] to-gray-900 text-white overflow-hidden relative">
        {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#bcfd4c]/10 rounded-full blur-2 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 right-20 w-96 h-96 bg-[#8cdb1f]/10 rounded-full blur-2 animate-[float_8s_ease-in-out_infinite_delay-2000ms]"></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-2 animate-[float_8s_ease-in-out_infinite_delay-4000ms]"></div>
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-[#bcfd4c]/5 rounded-full blur-2xl animate-pulse"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>
      <br/>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
            <br/>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-[#bcfd4c] rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-[#bcfd4c] rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-[#bcfd4c] rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            What We{' '}
            <span className="text-transparent bg-gradient-to-r from-[#bcfd4c] to-[#8cdb1f] bg-clip-text">
              Offer
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#bcfd4c] to-[#8cdb1f] rounded-full mx-auto mb-8"></div>
          
          <p className="text-lg sm:text-1xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Comprehensive technology services designed to drive your business forward in the digital era. 
            From concept to deployment, we deliver excellence at every stage.
          </p>
        </div>
        <br/>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#bcfd4c]/10 to-[#8cdb1f]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#bcfd4c] to-[#8cdb1f] rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25 group-hover:scale-110 transition-transform duration-500">
                  <div className="text-gray-900">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-[#bcfd4c] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 ml-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#bcfd4c] to-[#8cdb1f] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
      <br/>
      <br/>
    </section>
  )
}