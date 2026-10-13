import { useEffect, useState } from "react";

import familyHomeImage from "../../images/family-home-1.jpg";
import riverInstallImage from "../../images/river-install.jpg";
import solarInstallImage from "../../images/solar-install.jpg";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: "Modern Family Home",
      description: "Contemporary 4-bedroom home with sustainable design features and energy-efficient systems.",
      category: "residential",
      image: familyHomeImage,
      completionYear: "2024"
    },
    // {
    //   id: 2,
    //   title: "Corporate Office Complex",
    //   description: "15-story office building with modern amenities and LEED certification standards.",
    //   category: "commercial",
    //   image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    //   completionYear: "2023"
    // },
    {
      id: 3,
      title: "HVAC equipment Installation",
      description: "Installation of a commercial HVAC system to provide efficient cooling and climate control within a building.",
      category: "infrastructure",
      image: riverInstallImage,
      completionYear: "2023"
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
      title: "Solar Power System Installation",
      description: "Installation of a solar power system featuring a FelicitySolar inverter, battery storage unit, and electrical distribution panel for reliable, energy-efficient power supply.",
      category: "Infrastructure",
      image: solarInstallImage,
      completionYear: "2024"
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
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="block w-full text-left cursor-zoom-in"
                aria-label={`View ${project.title}`}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </button>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-brand-dark">{project.title}</h3>
                <p className="text-brand-text mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm px-3 py-1 rounded ${getCategoryColor(project.category)}`}>
                    {getCategoryLabel(project.category)}
                  </span>
                  <span className="text-sm text-brand-text">
                    Completed: {project.completionYear}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-5xl w-full rounded-2xl bg-white p-3 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 z-10 rounded-full bg-black/60 px-3 py-1 text-sm font-medium text-white hover:bg-black/80"
            >
              Close
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="max-h-[80vh] w-full rounded-xl object-contain"
            />
            <div className="px-2 pb-2 pt-4">
              <h3 className="text-2xl font-semibold text-brand-dark">{selectedProject.title}</h3>
              <p className="mt-2 text-brand-text">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
