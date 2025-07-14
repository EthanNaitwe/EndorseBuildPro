import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6">
              About Endorse256Services
            </h2>
            <p className="text-lg text-brand-text mb-6">
              Founded by <span className="font-semibold text-brand-dark">Nuwagaba Goodhope</span>, Endorse256Services has established itself as a trusted name in Uganda's construction industry. Our commitment to excellence and innovative approach to construction has made us the preferred choice for clients seeking quality and reliability.
            </p>
            <p className="text-lg text-brand-text mb-6">
              We believe that every construction project is an opportunity to create lasting value for our clients and communities. Our team of skilled professionals brings years of experience and a passion for building excellence to every project we undertake.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="text-brand-blue mr-3 w-5 h-5" />
                <span className="text-brand-text">Over 50 successful projects completed</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-brand-blue mr-3 w-5 h-5" />
                <span className="text-brand-text">Licensed and insured construction company</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-brand-blue mr-3 w-5 h-5" />
                <span className="text-brand-text">Committed to sustainable building practices</span>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-brand-bg rounded-lg p-8 text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                alt="Nuwagaba Goodhope - Founder" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Nuwagaba Goodhope</h3>
              <p className="text-brand-blue font-medium mb-4">Founder & CEO</p>
              <p className="text-brand-text">
                With over 15 years of experience in construction and project management, Nuwagaba leads our team with a vision of building excellence and delivering exceptional results for every client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
