import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    rating: 5,
    text: "Excellent service! They helped me choose the perfect health insurance plan for my family. The claim process was smooth and hassle-free.",
    insuranceType: "Health Insurance"
  },
  {
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    text: "Very professional team. Got my motor insurance renewed with better coverage at a competitive price. Highly recommended!",
    insuranceType: "Motor Insurance"
  },
  {
    name: "Amit Patel",
    location: "Bangalore",
    rating: 5,
    text: "They helped me choose the right property insurance with clear coverage details and quick claim assistance. Highly satisfied!",
    insuranceType: "Property Insurance"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their insurance needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-blue-200 mb-3" />
                
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {testimonial.text}
                </p>
                
                <div className="border-t pt-4">
                  <p className="text-gray-500 text-xs mb-1">{testimonial.insuranceType}</p>
                  <p className="text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
