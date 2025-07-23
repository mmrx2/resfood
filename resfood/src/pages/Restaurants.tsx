import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Star, Clock, MapPin } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Restaurants = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('همه');

  const filters = ['همه', 'سریع', 'ایرانی', 'فست فود', 'پیتزا', 'آسیایی'];
  
  const restaurants = [
    {
      id: 1,
      name: 'رستوران سنتی پارسیان',
      cuisine: 'غذای ایرانی',
      rating: 4.8,
      deliveryTime: '۲۰-۳۰',
      deliveryFee: '۱۵,۰۰۰',
      image: '/placeholder.svg',
      distance: '۱.۲ کیلومتر',
      isOpen: true,
      featured: true
    },
    {
      id: 2,
      name: 'پیتزا فابریکا',
      cuisine: 'پیتزا و فست فود',
      rating: 4.6,
      deliveryTime: '۱۵-۲۵',
      deliveryFee: '۱۲,۰۰۰',
      image: '/placeholder.svg',
      distance: '۰.۸ کیلومتر',
      isOpen: true,
      featured: false
    },
    {
      id: 3,
      name: 'رستوران آسیایی توکیو',
      cuisine: 'غذای آسیایی',
      rating: 4.7,
      deliveryTime: '۲۵-۳۵',
      deliveryFee: '۱۸,۰۰۰',
      image: '/placeholder.svg',
      distance: '۲.۱ کیلومتر',
      isOpen: false,
      featured: false
    }
  ];

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'همه' || restaurant.cuisine.includes(selectedFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">رستوران‌ها</h1>
          <p className="text-muted-foreground">بهترین رستوران‌های شهر در خدمت شما</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="جستجو در رستوران‌ها..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          <Button variant="outline" size="sm" className="gap-2 whitespace-nowrap">
            <Filter className="h-4 w-4" />
            فیلتر
          </Button>
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter(filter)}
              className="whitespace-nowrap"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <Card 
              key={restaurant.id} 
              className={`overflow-hidden hover:shadow-lg transition-shadow cursor-pointer ${!restaurant.isOpen ? 'opacity-60' : ''}`}
            >
              <div className="relative">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                {restaurant.featured && (
                  <Badge className="absolute top-2 right-2 bg-yellow-500">
                    ویژه
                  </Badge>
                )}
                {!restaurant.isOpen && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="secondary" className="bg-white text-black">
                      بسته
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{restaurant.name}</CardTitle>
                    <CardDescription className="mt-1">{restaurant.cuisine}</CardDescription>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-yellow-600">
                    <Star className="h-4 w-4 fill-current" />
                    {restaurant.rating}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {restaurant.deliveryTime} دقیقه
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {restaurant.distance}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">
                    هزینه ارسال: {restaurant.deliveryFee} تومان
                  </span>
                  <Button size="sm" disabled={!restaurant.isOpen}>
                    {restaurant.isOpen ? 'مشاهده منو' : 'بسته'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">رستورانی یافت نشد</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Restaurants;