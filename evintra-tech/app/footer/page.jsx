export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Evintra</span>
              <span className="text-[#bcfd4c]">Tech</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading technology company providing innovative solutions 
              for businesses worldwide.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#bcfd4c]">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#home" className="text-gray-300 hover:text-[#bcfd4c] transition-colors duration-300">Home</a>
              <a href="#services" className="text-gray-300 hover:text-[#bcfd4c] transition-colors duration-300">Services</a>
              <a href="#about" className="text-gray-300 hover:text-[#bcfd4c] transition-colors duration-300">About</a>
              <a href="#contact" className="text-gray-300 hover:text-[#bcfd4c] transition-colors duration-300">Contact</a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#bcfd4c]">Services</h4>
            <div className="flex flex-col gap-2">
              <a href="#services" className="text-gray-300 hover:text-[#bcfd4c] transition-colors duration-300">Web Development</a>
              <a href="#services" className="text-gray-300 hover:text-[#bcfd4c] transition-colors duration-300">Mobile Solutions</a>
              <a href="#services" className="text-gray-300 hover:text-[#bcfd4c] transition-colors duration-300">Cloud Services</a>
              <a href="#services" className="text-gray-300 hover:text-[#bcfd4c] transition-colors duration-300">AI & ML</a>
            </div>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#bcfd4c]">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-gray-300 hover:text-[#bcfd4c] transition-colors duration-300">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-[#bcfd4c] transition-colors duration-300">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-[#bcfd4c] transition-colors duration-300">GitHub</a>
              <a href="#" className="text-gray-300 hover:text-[#bcfd4c] transition-colors duration-300">Instagram</a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 Evintra-Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}