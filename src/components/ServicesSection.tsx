import { Card, CardContent } from "./ui/card";
import { Heart, Users, Car, Shield } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Comprehensive medical coverage for you and your family with cashless hospitalization and extensive network.",
    color: "text-red-500"
  },
  {
    icon: Users,
    title: "Life Insurance",
    description: "Secure your family's financial future with term and whole life insurance plans with guaranteed returns.",
    color: "text-blue-500"
  },
  {
    icon: Car,
    title: "Motor Insurance",
    description: "Complete protection for your vehicle with comprehensive coverage, zero depreciation, and quick claim settlement.",
    color: "text-green-500"
  },
  {
    icon: Shield,
      title: "Property Insurance",
  description: "Protect your home and property from fire, theft, natural disasters and accidental damage with flexible cover options and prompt claim support.",
    color: "text-purple-500"
  }
];

export function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Insurance Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of insurance products to meet all your protection needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 ${service.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
