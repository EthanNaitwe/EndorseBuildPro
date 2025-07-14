import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/image_1752500360807.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-brand-dark shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="Endorse256Services Logo" 
              className="h-8 w-auto mr-3"
            />
            {/* <h1 className="text-2xl font-bold text-white">Endorse256Services</h1> */}
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-brand-accent transition duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-brand-accent transition duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-brand-accent transition duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:text-brand-accent transition duration-300"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-brand-accent transition duration-300"
            >
              Contact
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-brand-accent"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-brand-accent">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-white hover:text-brand-accent w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block px-3 py-2 text-white hover:text-brand-accent w-full text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 text-white hover:text-brand-accent w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block px-3 py-2 text-white hover:text-brand-accent w-full text-left"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-white hover:text-brand-accent w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
