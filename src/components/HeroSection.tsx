import { Button } from "./ui/button";
import { Shield, Phone } from "lucide-react";
import TopVector from "./figma/TopVector";

export function HeroSection({ onGetQuote }: { onGetQuote: () => void }) {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTAgMTZjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnptMzYgMzZjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="absolute right-4 top-4 pointer-events-none">
          <TopVector className="w-[520px] h-[190px] md:w-[420px] md:h-[140px]" />
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Shield className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">Trusted by 1000+ Customers</span>
          </div>
          
          <h1 className="max-w-4xl mb-6">
            Secure Your Future with the Right Insurance Plan
          </h1>
          
          <p className="max-w-2xl mb-8 text-blue-100 text-lg">
            Get comprehensive insurance coverage tailored to your needs. Compare policies, get instant quotes, and protect what matters most to you and your family.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={onGetQuote}
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 shadow-lg shadow-yellow-500/20"
            >
              Get Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white/30 hover:bg-white/20 text-white backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
