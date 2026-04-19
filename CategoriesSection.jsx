import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { jobCategories } from '../data/jobs';
import aiIcon from '../assets/ai_icon.png';
import cybersecurityIcon from '../assets/cybersecurity_icon.png';
import cloudIcon from '../assets/cloud_icon.png';
import softwareIcon from '../assets/software_icon.png';
import dataIcon from '../assets/data_science_icon.png';

const iconMap = {
  'ai_icon.png': aiIcon,
  'cybersecurity_icon.png': cybersecurityIcon,
  'cloud_icon.png': cloudIcon,
  'software_icon.png': softwareIcon,
  'data_science_icon.png': dataIcon
};

const CategoriesSection = () => {
  return (
    <section id="categories" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-arabic-kufi">
            التصنيفات الرئيسية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            استكشف الوظائف المستقبلية مصنفة حسب المجالات التقنية الرئيسية
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobCategories.map((category) => (
            <Card key={category.id} className="card-hover cursor-pointer group">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="icon-container">
                    <img 
                      src={iconMap[category.icon]} 
                      alt={category.name}
                      className="w-6 h-6 filter brightness-0 invert"
                    />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {category.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <Badge className={category.color}>
                    استكشف الوظائف
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

