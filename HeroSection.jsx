import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="hero-gradient section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-primary border border-primary/20">
            <Sparkles className="w-4 h-4 ml-2" />
            خارطة الطريق للمستقبل الرقمي
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-arabic-kufi">
          وظيفتك الرقمية 
          <span className="text-primary"> 2035</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
          اكتشف أهم 20 وظيفة مستقبلية في تقنيات المعلومات والاتصالات للسنوات العشر القادمة. 
          دليلك الشامل للمهارات والشهادات والمشاريع والمصادر المجانية لبناء مستقبلك المهني.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3" asChild>
            <Link to="/all-jobs">
              استكشف الوظائف
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
            <Link to="/tip-of-the-week">
              نصيحة الأسبوع
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">20</div>
            <div className="text-gray-600">وظيفة مستقبلية</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-gray-600">تصنيفات رئيسية</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-gray-600">مصدر تعليمي مجاني</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

