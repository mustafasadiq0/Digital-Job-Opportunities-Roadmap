import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobCard from '../components/JobCard';
import { jobs } from '../data/jobs';

const AllJobsPage = () => {
  return (
    <div className="min-h-screen bg-white font-arabic">
      <Header />
      <main className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center font-arabic-kufi">
            جميع الوظائف المستقبلية
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 text-center">
            استكشف القائمة الكاملة لأهم 20 وظيفة مستقبلية في تقنيات المعلومات والاتصالات.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllJobsPage;

