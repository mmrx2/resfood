import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Plus, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('همه');

  const categories = ['همه', 'پیش غذا', 'غذای اصلی', 'دسر', 'نوشیدنی'];
  
  const menuItems = [
    {
      id: 1,
      name: 'کباب کوبیده',
      description: 'کباب کوبیده تازه با برنج زعفرانی',
      price: '۲۵۰,۰۰۰',
      category: 'غذای اصلی',
      image: '/placeholder.svg',
      rating: 4.8,
      popular: true
    },
    {
      id: 2,
      name: 'پیتزا مارگاریتا',
      description: 'پیتزا کلاسیک با پنیر موزارلا و گوجه',
      price: '۱۸۰,۰۰۰',
      category: 'غذای اصلی',
      image: '/placeholder.svg',
      rating: 4.6
    },
    {
      id: 3,
      name: 'سالاد سزار',
      description: 'سالاد تازه با مرغ گریل و پنیر پارمزان',
      price: '۱۲۰,۰۰۰',
      category: 'پیش غذا',
      image: '/placeholder.svg',
      rating: 4.4
    }
  ];

  const filteredItems = selectedCategory === 'همه' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">منوی رستوران</h1>
          <p className="text-muted-foreground">بهترین غذاهای محلی و بین‌المللی</p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 left-2 bg-white/80 hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                {item.popular && (
                  <Badge className="absolute top-2 right-2 bg-orange-500">
                    محبوب
                  </Badge>
                )}
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription className="mt-1">{item.description}</CardDescription>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-yellow-600">
                    <Star className="h-4 w-4 fill-current" />
                    {item.rating}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">
                    {item.price} تومان
                  </span>
                  <Button size="sm" className="gap-2">
                    <Plus className="h-4 w-4" />
                    افزودن
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;