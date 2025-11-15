export default function Services() {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.'
    },
    {
      icon: '📱',
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile apps for iOS and Android platforms.'
    },
    {
      icon: '☁️',
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and deployment solutions for your business.'
    },
    {
      icon: '🤖',
      title: 'AI & ML',
      description: 'Artificial Intelligence and Machine Learning solutions to automate and optimize.'
    },
    {
      icon: '🔒',
      title: 'Cyber Security',
      description: 'Comprehensive security solutions to protect your digital assets.'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights and business intelligence.'
    }
  ]

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We offer a comprehensive range of technology services to help your business 
          thrive in the digital age.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#333333] mb-4">
                {service.title}
              </h3>
              <p className="text-[#6e6e6e] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}