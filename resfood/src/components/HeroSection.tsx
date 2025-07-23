import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star } from 'lucide-react';
import heroBurger from '@/assets/hero-burger.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2 fill-current" />
              #1 Food Delivery Platform
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Delicious Food
              <br />
              <span className="text-accent">Delivered Fast</span>
            </h1>
            
            <p className="text-lg text-white/90 mb-8 max-w-lg mx-auto lg:mx-0">
              Order from your favorite restaurants and enjoy fresh, hot meals delivered right to your doorstep in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Order Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-white/80 text-sm">Restaurants</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-white/80 text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">15min</div>
                <div className="text-white/80 text-sm">Avg Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroBurger}
                alt="Delicious gourmet burger"
                className="w-full h-auto max-w-lg mx-auto rounded-2xl shadow-glow"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute top-10 -left-6 bg-white rounded-xl p-4 shadow-elegant transform rotate-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-food-green rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white fill-current" />
                </div>
                <div>
                  <div className="font-semibold text-sm">4.9 Rating</div>
                  <div className="text-xs text-muted-foreground">2,500+ Reviews</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 -right-6 bg-white rounded-xl p-4 shadow-elegant transform -rotate-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Fast Delivery</div>
                  <div className="text-xs text-muted-foreground">Under 30 min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;