import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f1e8]">
      {/* Header */}
      <header className="bg-[#3a4a3d] py-4 px-8">
        <div className="container mx-auto flex justify-center">
          <div className="text-center">
            <p className="text-white text-sm font-light tracking-[0.3em] mb-1" style={{ fontFamily: 'serif' }}>Super</p>
            <h1 className="text-white text-2xl md:text-3xl font-bold tracking-wider">SPECIOSA</h1>
            <p className="text-white text-xs tracking-[0.2em] mt-1">RAW LEAF</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 relative overflow-hidden">
        {/* Large Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[#e8dfc8] opacity-40 text-[12rem] md:text-[20rem] lg:text-[25rem] font-bold leading-none select-none" style={{ fontFamily: 'cursive' }}>
            Super
          </div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            {/* Star Rating */}
            <div className="animate-in fade-in duration-700">
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm font-medium">100,000+ Happy Customers</p>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight uppercase tracking-tight animate-in fade-in duration-1000">
              Experience the power of premium, lab-tested products
            </h2>

            {/* Features List */}
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-gray-800 animate-in fade-in duration-1000 delay-200">
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-600 text-xl">•</span>
                <span className="font-medium">Made in America</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-600 text-xl">•</span>
                <span className="font-medium">30 Day Satisfaction Guarantee</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 animate-in fade-in duration-1000 delay-300">
              <Button 
                size="lg"
                className="bg-[#3a4a3d] hover:bg-[#2d3a30] text-white px-12 py-6 text-lg font-bold rounded-sm transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Shop Now
                <span className="ml-2">→</span>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#8bc34a] py-4">
        <div className="container mx-auto text-center">
          <a 
            href="/privacy-policy" 
            className="text-gray-900 hover:text-gray-700 font-medium transition-colors duration-200"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
