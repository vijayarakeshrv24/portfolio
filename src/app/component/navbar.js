"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    setOpen(false); // Close mobile menu
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="group cursor-pointer">
          <h1 className={`text-2xl font-bold transition-all duration-300 ${
            scrolled 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'
          } group-hover:scale-105`}>
            Myportfolio
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative text-gray-700 transition-all duration-300 hover:text-gray-900 py-2 px-1 group ${
                  activeSection === item.href.substring(1) ? 'text-blue-600' : ''
                }`}
              >
                {item.label}
                {/* Active indicator */}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                    activeSection === item.href.substring(1) ? 'w-full' : 'w-0'
                  } group-hover:w-full`}
                />
                {/* Hover effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <button 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200" 
          onClick={() => setOpen(!open)}
          aria-label="Toggle mobile menu"
        >
          <div className="relative w-6 h-6">
            <Menu 
              size={24} 
              className={`absolute transition-all duration-300 ${
                open ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
              }`} 
            />
            <X 
              size={24} 
              className={`absolute transition-all duration-300 ${
                open ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
              }`} 
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100">
          <ul className="flex flex-col gap-1 px-6 py-4 font-medium text-gray-700">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <a 
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block py-3 px-4 rounded-lg transition-all duration-200 hover:bg-gray-50 hover:text-blue-600 ${
                    activeSection === item.href.substring(1) 
                      ? 'text-blue-600 bg-blue-50' 
                      : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {/* Mobile CTA */}
            <li className="pt-4 border-t border-gray-100 mt-2">
              <button 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Get In Touch
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}