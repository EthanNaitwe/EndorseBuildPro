import { useState } from "react";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Modern Family Home",
      description: "Contemporary 4-bedroom home with sustainable design features and energy-efficient systems.",
      category: "residential",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      completionYear: "2023"
    },
    {
      id: 2,
      title: "Corporate Office Complex",
      description: "15-story office building with modern amenities and LEED certification standards.",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      completionYear: "2023"
    },
    {
      id: 3,
      title: "River Bridge Construction",
      description: "Major infrastructure project connecting two communities with a 200-meter steel bridge.",
      category: "infrastructure",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      completionYear: "2022"
    },
    {
      id: 4,
      title: "Luxury Apartment Complex",
      description: "50-unit residential complex with modern amenities and landscaped gardens.",
      category: "residential",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      completionYear: "2023"
    },
    {
      id: 5,
      title: "Shopping Center Development",
      description: "Large-scale retail complex with 100+ shops and entertainment facilities.",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      completionYear: "In Progress"
    },
    {
      id: 6,
      title: "Highway Extension Project",
      description: "5-kilometer highway extension with modern drainage and lighting systems.",
      category: "infrastructure",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      completionYear: "2022"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "residential":
        return "bg-brand-accent text-white";
      case "commercial":
        return "bg-brand-blue text-white";
      case "infrastructure":
        return "bg-brand-metallic text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "residential":
        return "Residential";
      case "commercial":
        return "Commercial";
      case "infrastructure":
        return "Infrastructure";
      default:
        return category;
    }
  };

  return (
    <section id="portfolio" className="py-16 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">Our Portfolio</h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Explore our diverse range of successful construction projects that showcase our expertise and commitment to quality.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2 rounded-lg transition duration-300 ${
              activeFilter === "all"
                ? "bg-brand-blue text-white"
                : "bg-white text-brand-text border border-brand-accent hover:bg-brand-accent hover:text-white"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveFilter("residential")}
            className={`px-6 py-2 rounded-lg transition duration-300 ${
              activeFilter === "residential"
                ? "bg-brand-blue text-white"
                : "bg-white text-brand-text border border-brand-accent hover:bg-brand-accent hover:text-white"
            }`}
          >
            Residential
          </button>
          <button
            onClick={() => setActiveFilter("commercial")}
            className={`px-6 py-2 rounded-lg transition duration-300 ${
              activeFilter === "commercial"
                ? "bg-brand-blue text-white"
                : "bg-white text-brand-text border border-brand-accent hover:bg-brand-accent hover:text-white"
            }`}
          >
            Commercial
          </button>
          <button
            onClick={() => setActiveFilter("infrastructure")}
            className={`px-6 py-2 rounded-lg transition duration-300 ${
              activeFilter === "infrastructure"
                ? "bg-brand-blue text-white"
                : "bg-white text-brand-text border border-brand-accent hover:bg-brand-accent hover:text-white"
            }`}
          >
            Infrastructure
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-brand-dark">{project.title}</h3>
                <p className="text-brand-text mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm px-3 py-1 rounded ${getCategoryColor(project.category)}`}>
                    {getCategoryLabel(project.category)}
                  </span>
                  <span className="text-sm text-brand-text">
                    Completed {project.completionYear}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
