import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedMenu from '@/components/FeaturedMenu';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturedMenu />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
