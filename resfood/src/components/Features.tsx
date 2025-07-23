import { Card, CardContent } from '@/components/ui/card';
import { Truck, Clock, Shield, Star, Smartphone, CreditCard } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Get your food delivered in under 30 minutes with our efficient delivery network.",
      color: "text-primary"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Service",
      description: "Order anytime, anywhere. Our platform is available round the clock for your convenience.",
      color: "text-secondary"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe & Secure",
      description: "Your payments and personal information are protected with bank-level security.",
      color: "text-food-green"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Quality Assured",
      description: "Every restaurant is verified and rated by our customers to ensure the best experience.",
      color: "text-food-yellow"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Easy to Use",
      description: "Intuitive interface designed for seamless ordering experience on all devices.",
      color: "text-primary"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Multiple Payment Options",
      description: "Pay with credit card, debit card, digital wallets, or cash on delivery.",
      color: "text-food-red"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose PlatePalace?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide the best food delivery experience with features designed to make ordering easy, fast, and enjoyable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-card mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the Best Food Delivery?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of satisfied customers who trust us for their daily meals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors">
                Download App
              </button>
              <button className="border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Start Ordering
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;