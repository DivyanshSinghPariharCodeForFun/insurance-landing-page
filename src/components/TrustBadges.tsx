import { Badge } from "./ui/badge";
import { Shield, Award, Users, CheckCircle, Clock, Headphones } from "lucide-react";

const badges = [
  {
    icon: Shield,
    text: "Trusted & Secure",
    color: "bg-blue-100 text-blue-700 border-blue-200"
  },
  {
    icon: Users,
    text: "1000+ Happy Customers",
    color: "bg-green-100 text-green-700 border-green-200"
  },
  {
    icon: Award,
    text: "Industry Certified",
    color: "bg-purple-100 text-purple-700 border-purple-200"
  },
  {
    icon: CheckCircle,
    text: "98% Claim Success",
    color: "bg-emerald-100 text-emerald-700 border-emerald-200"
  },
  {
    icon: Clock,
    text: "WhatsApp Support",
    color: "bg-orange-100 text-orange-700 border-orange-200"
  },
  {
    icon: Headphones,
    text: "Expert Guidance",
    color: "bg-indigo-100 text-indigo-700 border-indigo-200"
  }
];

export function TrustBadges() {
  return (
    <section className="py-12 px-4 bg-white border-y">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <Badge
                key={index}
                variant="outline"
                className={`px-4 py-2 text-sm flex items-center gap-2 ${badge.color}`}
              >
                <Icon className="w-4 h-4" />
                {badge.text}
              </Badge>
            );
          })}
        </div>
      </div>
    </section>
  );
}
