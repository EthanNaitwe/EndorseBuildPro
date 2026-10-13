import { ArrowRight } from "lucide-react";

import residentialServiceImage from "../../images/residenntial-serv.jpg";
import interiorFinishingImage from "../../images/interior-finishing.png";
import infrastructureDevelopmentImage from "../../images/infrastructure-dev.jpg";
import remodelingImage from "../../images/remodel.jpg";
import constructionConsultationImage from "../../images/gdhp-1.jpg";

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Residential Construction",
      description: "Custom homes, renovations, and residential developments with modern designs and quality finishes.",
      image: residentialServiceImage
    },
    {
      title: "Interior Finishing",
      description: "Interior renovation and finishing project featuring a custom floating TV/media console, wall-mounted cabinetry, decorative mirror panels, and recessed LED ceiling lighting.",
      image: interiorFinishingImage
    },
    {
      title: "Infrastructure Development",
      description: "Roads, bridges, utilities, and public infrastructure projects that serve communities.",
      image: infrastructureDevelopmentImage
    },
    {
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with modern upgrades and functional improvements.",
      image: remodelingImage
    },
    {
      title: "Construction Consultation",
      description: "Expert advice on project planning, design optimization, and construction strategy.",
      image: constructionConsultationImage
    },
    {
      title: "Project Management",
      description: "Comprehensive project oversight ensuring quality, timeline, and budget adherence.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    }
  ];

  return (
    <section id="services" className="py-16 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">Our Construction Services</h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            From residential homes to commercial buildings, we provide comprehensive construction solutions tailored to your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-brand-dark">{service.title}</h3>
                <p className="text-brand-text mb-4">{service.description}</p>
                {/* <button
                  onClick={scrollToContact}
                  className="text-brand-blue hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
