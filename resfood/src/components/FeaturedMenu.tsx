import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Clock, Plus } from 'lucide-react';
import saladBowl from '@/assets/salad-bowl.jpg';
import pizzaMargherita from '@/assets/pizza-margherita.jpg';

const FeaturedMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Gourmet Burger Deluxe",
      description: "Premium beef patty with fresh lettuce, tomato, cheese, and our special sauce",
      price: 14.99,
      rating: 4.8,
      time: "15-20 min",
      image: saladBowl,
      category: "Main Course",
      popular: true
    },
    {
      id: 2,
      name: "Fresh Garden Salad",
      description: "Mixed greens with cherry tomatoes, avocado, grilled chicken, and vinaigrette",
      price: 11.99,
      rating: 4.7,
      time: "10-15 min",
      image: saladBowl,
      category: "Healthy",
      popular: false
    },
    {
      id: 3,
      name: "Pizza Margherita",
      description: "Classic Italian pizza with fresh mozzarella, basil, and tomato sauce",
      price: 16.99,
      rating: 4.9,
      time: "20-25 min",
      image: pizzaMargherita,
      category: "Pizza",
      popular: true
    },
    {
      id: 4,
      name: "Chicken Caesar Wrap",
      description: "Grilled chicken, romaine lettuce, parmesan, and caesar dressing in a tortilla",
      price: 9.99,
      rating: 4.6,
      time: "10-12 min",
      image: saladBowl,
      category: "Wraps",
      popular: false
    },
    {
      id: 5,
      name: "Seafood Pasta",
      description: "Fresh shrimp and scallops in creamy garlic sauce over linguine",
      price: 19.99,
      rating: 4.8,
      time: "25-30 min",
      image: pizzaMargherita,
      category: "Pasta",
      popular: true
    },
    {
      id: 6,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center, served with vanilla ice cream",
      price: 7.99,
      rating: 4.9,
      time: "8-10 min",
      image: saladBowl,
      category: "Dessert",
      popular: false
    }
  ];

  const categories = ["All", "Main Course", "Healthy", "Pizza", "Wraps", "Pasta", "Dessert"];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular dishes, carefully crafted by expert chefs and loved by thousands of customers.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.popular && (
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                    Popular
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                  {item.category}
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-foreground line-clamp-1">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-primary">
                    ${item.price}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-food-yellow fill-current" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{item.time}</span>
                    </div>
                  </div>
                </div>
                
                <Button variant="food" className="w-full group">
                  <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;