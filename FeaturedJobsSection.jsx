import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import JobCard from './JobCard';
import { featuredJobs } from '../data/jobs';
import { Link } from 'react-router-dom';

const FeaturedJobsSection = () => {
  return (
    <section id="jobs" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-arabic-kufi">
            الوظائف المميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            اكتشف أهم الوظائف المستقبلية مع تفاصيل شاملة عن المهارات والشهادات والمشاريع المطلوبة
          </p>
          <Button variant="outline" className="mb-8" asChild>
            <Link to="/all-jobs">
              عرض جميع الوظائف (20)
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link to="/all-jobs">
              استكشف المزيد من الوظائف
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobsSection;

