import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Clock, Star, BookOpen } from 'lucide-react';
import { tipOfTheWeek } from '../data/jobs';

const TipOfTheWeekSection = () => {
  return (
    <section id="tip" className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20 mb-4">
            <Star className="w-4 h-4 ml-2" />
            نصيحة الأسبوع
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-arabic-kufi">
            مصدر مجاني جديد لتعزيز مسيرتك المهنية
          </h2>
          <p className="text-lg text-gray-600">
            كل أسبوع، نقدم لك مصدرًا تعليميًا مجانيًا أو مسارًا تدريبيًا جديدًا
          </p>
        </div>
        
        <Card className="card-hover bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <div className="icon-container">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
              {tipOfTheWeek.title}
            </CardTitle>
            <CardDescription className="text-gray-600 text-lg leading-relaxed">
              {tipOfTheWeek.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-blue-100 text-blue-800">
                <Clock className="w-3 h-3 ml-1" />
                {tipOfTheWeek.duration}
              </Badge>
              <Badge className="bg-green-100 text-green-800">
                {tipOfTheWeek.level}
              </Badge>
              <Badge className="bg-purple-100 text-purple-800">
                {tipOfTheWeek.provider}
              </Badge>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-3"
                asChild
              >
                <a 
                  href={tipOfTheWeek.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  ابدأ التعلم الآن
                  <ExternalLink className="w-5 h-5 mr-2" />
                </a>
              </Button>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600">
                <strong>ملاحظة:</strong> يمكنك التسجيل في الدورة مجانًا كـ "مدقق" للوصول إلى معظم المحتوى
              </p>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 font-medium">
            ترقبوا نصيحة الأسبوع القادم! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default TipOfTheWeekSection;

