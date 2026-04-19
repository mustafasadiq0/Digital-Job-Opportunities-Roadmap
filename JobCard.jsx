import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, Code, BookOpen, Target } from 'lucide-react';
import skillsIcon from '../assets/skills_icon.png';
import certificateIcon from '../assets/certificate_icon.png';
import projectIcon from '../assets/project_icon.png';
import resourcesIcon from '../assets/resources_icon.png';

const JobCard = ({ job }) => {
  const getLevelColor = (level) => {
    switch (level) {
      case 'مبتدئ':
        return 'bg-green-100 text-green-800';
      case 'متوسط':
        return 'bg-yellow-100 text-yellow-800';
      case 'متقدم':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="card-hover h-full">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge className={getLevelColor(job.level)}>
            {job.level}
          </Badge>
          <Badge variant="outline">
            {job.category === 'ai' && 'ذكاء اصطناعي'}
            {job.category === 'cybersecurity' && 'أمن سيبراني'}
            {job.category === 'cloud' && 'حوسبة سحابية'}
            {job.category === 'software' && 'تطوير برمجيات'}
            {job.category === 'data' && 'علم البيانات'}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-gray-900 mb-2">
          {job.title}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {job.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Skills */}
        <div>
          <div className="flex items-center mb-2">
            <img src={skillsIcon} alt="المهارات" className="w-5 h-5 ml-2" />
            <h4 className="font-semibold text-gray-900">المهارات المطلوبة</h4>
          </div>
          <div className="flex flex-wrap gap-1">
            {job.skills.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {job.skills.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{job.skills.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center mb-2">
            <img src={certificateIcon} alt="الشهادات" className="w-5 h-5 ml-2" />
            <h4 className="font-semibold text-gray-900">الشهادات</h4>
          </div>
          <div className="text-sm text-gray-600">
            {job.certifications.slice(0, 2).join(', ')}
            {job.certifications.length > 2 && '...'}
          </div>
        </div>

        {/* Projects */}
        <div>
          <div className="flex items-center mb-2">
            <img src={projectIcon} alt="المشاريع" className="w-5 h-5 ml-2" />
            <h4 className="font-semibold text-gray-900">مشاريع مقترحة</h4>
          </div>
          <div className="text-sm text-gray-600">
            {job.projects.slice(0, 2).join(', ')}
          </div>
        </div>

        {/* Resources */}
        <div>
          <div className="flex items-center mb-2">
            <img src={resourcesIcon} alt="المصادر" className="w-5 h-5 ml-2" />
            <h4 className="font-semibold text-gray-900">مصادر تعليمية</h4>
          </div>
          <div className="space-y-1">
            {job.resources.slice(0, 2).map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-3 h-3 ml-1" />
                {resource.name}
              </a>
            ))}
          </div>
        </div>

        <Button className="w-full mt-4" variant="outline">
          عرض التفاصيل الكاملة
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;

