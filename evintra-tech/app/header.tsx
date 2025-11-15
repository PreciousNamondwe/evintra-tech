"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items array
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div>
      <nav className={`fixed w-full max-w-screen px-4 py-3 mx-auto transition-all duration-300 z-[9999] ${
        isScrolled 
          ? 'bg-white/50 backdrop-blur-xl shadow-lg' 
          : 'bg-white/70 backdrop-blur-lg'
      }`}>
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 cursor-pointer py-1.5"
          >
            <div className="relative">
              <div className="w-3 h-3 bg-gradient-to-br from-[#bcfd4c] to-[#8cdb1f] rounded-full"></div>
              <div className="absolute top-0 left-0 w-3 h-3 bg-gradient-to-br from-[#bcfd4c] to-[#8cdb1f] rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Evintra<span className="text-[#bcfd4c]">Tech</span>
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="relative ml-auto h-8 w-8 select-none rounded-lg text-center align-middle transition-all hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={toggleMobileMenu}
              type="button"
              aria-label="Toggle menu"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 min-h-screen w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden z-50`}
          >
            <div className="flex flex-row items-center justify-between p-6 border-b border-gray-100">
              <Link
                href="/"
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-2 h-2 bg-gradient-to-br from-[#bcfd4c] to-[#8cdb1f] rounded-full"></div>
                <span className="text-lg font-bold text-gray-900">
                  Evintra<span className="text-[#bcfd4c]">Tech</span>
                </span>
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col h-full gap-1 p-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className={`flex items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-gradient-to-r from-[#bcfd4c]/10 to-[#8cdb1f]/10 text-gray-900 border-l-4 border-[#bcfd4c]'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span 
                      className={`w-1.5 h-1.5 rounded-full mr-3 ${
                        isActive(item.href)
                          ? 'bg-gradient-to-r from-[#bcfd4c] to-[#8cdb1f]'
                          : 'bg-gray-300'
                      }`}
                    ></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center gap-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className={`relative px-6 py-2 text-20 font-medium transition-all duration-200 rounded-lg ${
                      isActive(item.href)
                        ? 'text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-[#bcfd4c] to-[#8cdb1f] rounded-full"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}