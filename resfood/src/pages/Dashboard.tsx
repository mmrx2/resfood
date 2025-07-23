import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingBag, 
  Clock, 
  TrendingUp, 
  Users, 
  Star,
  MapPin,
  Phone
} from 'lucide-react';
import Navigation from '@/components/Navigation';

const Dashboard = () => {
  const stats = [
    {
      title: 'کل سفارشات',
      value: '۱۲۸',
      change: '+۱۲%',
      icon: ShoppingBag,
      color: 'text-blue-600'
    },
    {
      title: 'سفارشات در انتظار',
      value: '۷',
      change: '+۳',
      icon: Clock,
      color: 'text-orange-600'
    },
    {
      title: 'فروش امروز',
      value: '۳,۲۵۰,۰۰۰',
      change: '+۸%',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      title: 'مشتریان فعال',
      value: '۴۵۶',
      change: '+۱۵%',
      icon: Users,
      color: 'text-purple-600'
    }
  ];

  const recentOrders = [
    {
      id: '#۱۰۰۱',
      customer: 'علی احمدی',
      items: '۲ آیتم',
      amount: '۱۸۰,۰۰۰',
      status: 'آماده‌سازی',
      time: '۱۰ دقیقه پیش'
    },
    {
      id: '#۱۰۰۲',
      customer: 'فاطمه محمدی',
      items: '۱ آیتم',
      amount: '۲۵۰,۰۰۰',
      status: 'تحویل',
      time: '۱۵ دقیقه پیش'
    },
    {
      id: '#۱۰۰۳',
      customer: 'حسن رضایی',
      items: '۳ آیتم',
      amount: '۴۲۰,۰۰۰',
      status: 'تکمیل',
      time: '۳۰ دقیقه پیش'
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">داشبورد مدیریت</h1>
          <p className="text-muted-foreground">مدیریت رستوران و سفارشات</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> نسبت به ماه گذشته
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle>سفارشات اخیر</CardTitle>
              <CardDescription>لیست آخرین سفارشات دریافتی</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="font-medium">{order.customer}</p>
                          <p className="text-sm text-muted-foreground">{order.id} • {order.items}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="font-bold">{order.amount} تومان</p>
                      <Badge variant={
                        order.status === 'تکمیل' ? 'default' :
                        order.status === 'آماده‌سازی' ? 'secondary' : 'outline'
                      }>
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Restaurant Info */}
          <Card>
            <CardHeader>
              <CardTitle>اطلاعات رستوران</CardTitle>
              <CardDescription>وضعیت فعلی رستوران</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <div>
                  <p className="font-medium">امتیاز رستوران</p>
                  <p className="text-sm text-muted-foreground">۴.۸ از ۵ (۲۳۴ نظر)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="font-medium">آدرس</p>
                  <p className="text-sm text-muted-foreground">تهران، خیابان ولیعصر، پلاک ۱۲۳</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-500" />
                <div>
                  <p className="font-medium">شماره تماس</p>
                  <p className="text-sm text-muted-foreground">۰۲۱-۱۲۳۴۵۶۷۸</p>
                </div>
              </div>
              
              <Button className="w-full">
                ویرایش اطلاعات رستوران
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;