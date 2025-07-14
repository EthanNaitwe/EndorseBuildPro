import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export default function TestimonialsSection() {
  const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">What Our Clients Say</h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with Endorse256Services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-brand-bg rounded-lg p-6 shadow-md animate-pulse">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-16"></div>
                  </div>
                </div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">What Our Clients Say</h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Endorse256Services.
          </p>
        </div>
        
        {testimonials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-brand-text text-lg">No testimonials available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-brand-bg rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.imageUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-brand-dark">{testimonial.name}</h4>
                    <p className="text-sm text-brand-text">
                      {testimonial.position}
                      {testimonial.company && ` - ${testimonial.company}`}
                    </p>
                  </div>
                </div>
                <p className="text-brand-text italic mb-4">"{testimonial.message}"</p>
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
