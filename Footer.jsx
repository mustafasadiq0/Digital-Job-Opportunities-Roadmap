import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, Globe, Heart } from 'lucide-react';
import websiteLogo from '../assets/website_logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'الوظائف المميزة', href: '#jobs' },
    { name: 'التصنيفات', href: '#categories' },
    { name: 'نصيحة الأسبوع', href: '#tip' },
    { name: 'دليل المبتدئين', href: '#guide' }
  ];

  const resources = [
    { name: 'Coursera', href: 'https://coursera.org' },
    { name: 'edX', href: 'https://edx.org' },
    { name: 'FreeCodeCamp', href: 'https://freecodecamp.org' },
    { name: 'Kaggle Learn', href: 'https://kaggle.com/learn' }
  ];

  const categories = [
    { name: 'الذكاء الاصطناعي', href: '#ai' },
    { name: 'الأمن السيبراني', href: '#cybersecurity' },
    { name: 'الحوسبة السحابية', href: '#cloud' },
    { name: 'تطوير البرمجيات', href: '#software' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img 
              src={websiteLogo} 
              alt="وظيفتك الرقمية 2035" 
              className="h-12 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 leading-relaxed">
              دليلك الشامل لاستكشاف أهم الوظائف المستقبلية في تقنيات المعلومات والاتصالات. 
              ابدأ رحلتك نحو المستقبل الرقمي اليوم.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-800">
                <Mail className="w-4 h-4 ml-2" />
                تواصل معنا
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">التصنيفات</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <a 
                    href={category.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Educational Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">مصادر تعليمية</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a 
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ExternalLink className="w-3 h-3 ml-1" />
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 وظيفتك الرقمية 2035. جميع الحقوق محفوظة.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span>صُنع بـ</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>لمستقبل أفضل</span>
              <Globe className="w-4 h-4 mr-2" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

