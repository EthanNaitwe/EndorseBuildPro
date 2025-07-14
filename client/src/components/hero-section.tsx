import { ArrowRight, ExternalLink } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Building Excellence,<br />
            <span className="text-brand-accent">Delivering Trust</span>
          </h2>
          <p className="text-xl lg:text-2xl mb-8 text-gray-200">
            Professional construction services with uncompromising quality and reliability. 
            We build what matters to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Get Quote Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-dark transition duration-300"
            >
              View Our Work
              <ExternalLink className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
