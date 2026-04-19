// Job categories and data
export const jobCategories = [
  {
    id: 'ai',
    name: 'الذكاء الاصطناعي',
    icon: 'ai_icon.png',
    description: 'وظائف مستقبلية في مجال الذكاء الاصطناعي والتعلم الآلي',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'cybersecurity',
    name: 'الأمن السيبراني',
    icon: 'cybersecurity_icon.png',
    description: 'وظائف حماية البيانات والأنظمة الرقمية',
    color: 'bg-red-100 text-red-800'
  },
  {
    id: 'cloud',
    name: 'الحوسبة السحابية',
    icon: 'cloud_icon.png',
    description: 'وظائف تطوير وإدارة الحلول السحابية',
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 'software',
    name: 'تطوير البرمجيات',
    icon: 'software_icon.png',
    description: 'وظائف تطوير التطبيقات والأنظمة البرمجية',
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'data',
    name: 'علم البيانات',
    icon: 'data_science_icon.png',
    description: 'وظائف تحليل البيانات واستخراج الرؤى',
    color: 'bg-orange-100 text-orange-800'
  }
];

export const jobs = [
  {
    id: 1,
    title: 'مدرب نماذج ذكاء اصطناعي',
    category: 'ai',
    level: 'مبتدئ',
    description: 'يعمل على تحسين أداء النماذج عبر البيانات',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'تحليل البيانات'],
    certifications: ['Google AI Certificate', 'Coursera Deep Learning'],
    projects: ['تدريب نموذج تصنيف الصور', 'تحسين دقة النماذج'],
    resources: [
      { name: 'Coursera - Machine Learning', url: 'https://coursera.org/learn/machine-learning' },
      { name: 'edX - Introduction to AI', url: 'https://edx.org/course/artificial-intelligence' }
    ]
  },
  {
    id: 2,
    title: 'مدرب أساسيات الذكاء الاصطناعي',
    category: 'ai',
    level: 'مبتدئ',
    description: 'يُدرب الموظفين على استخدام أدوات الذكاء الاصطناعي',
    skills: ['التواصل', 'التدريب', 'أساسيات AI', 'إدارة المشاريع'],
    certifications: ['AI for Everyone Certificate', 'Training Skills Certificate'],
    projects: ['برنامج تدريبي للموظفين', 'ورش عمل AI'],
    resources: [
      { name: 'AI for Everyone - Coursera', url: 'https://coursera.org/learn/ai-for-everyone' },
      { name: 'MIT AI Course', url: 'https://ocw.mit.edu/courses/artificial-intelligence/' }
    ]
  },
  {
    id: 3,
    title: 'مهندس متخصص في الذكاء الاصطناعي',
    category: 'ai',
    level: 'متوسط',
    description: 'يركز على تحقيق أقصى استفادة من تكنولوجيا الذكاء الاصطناعي',
    skills: ['Prompt Engineering', 'NLP', 'API Integration', 'Python'],
    certifications: ['OpenAI API Certificate', 'Advanced AI Certificate'],
    projects: ['تطوير chatbot ذكي', 'تحسين استجابات AI'],
    resources: [
      { name: 'OpenAI Documentation', url: 'https://platform.openai.com/docs' },
      { name: 'Prompt Engineering Guide', url: 'https://www.promptingguide.ai/' }
    ]
  },
  {
    id: 4,
    title: 'محلل أمن معلومات',
    category: 'cybersecurity',
    level: 'مبتدئ',
    description: 'يتعامل مع الهجمات السيبرانية وقضايا الأمن',
    skills: ['Network Security', 'Incident Response', 'Risk Assessment', 'Security Tools'],
    certifications: ['CompTIA Security+', 'CISSP Associate'],
    projects: ['تحليل الثغرات الأمنية', 'خطة الاستجابة للحوادث'],
    resources: [
      { name: 'Cybrary - Free Cybersecurity Training', url: 'https://cybrary.it' },
      { name: 'SANS Cyber Aces', url: 'https://cyberaces.org' }
    ]
  },
  {
    id: 5,
    title: 'مطور تطبيقات سحابية',
    category: 'cloud',
    level: 'مبتدئ',
    description: 'يطور تطبيقات تعمل على البنية التحتية السحابية',
    skills: ['AWS/Azure/GCP', 'Docker', 'Kubernetes', 'Serverless'],
    certifications: ['AWS Cloud Practitioner', 'Azure Fundamentals'],
    projects: ['تطبيق ويب سحابي', 'API serverless'],
    resources: [
      { name: 'AWS Free Tier', url: 'https://aws.amazon.com/free/' },
      { name: 'Microsoft Learn Azure', url: 'https://docs.microsoft.com/learn/azure/' }
    ]
  },
  {
    id: 6,
    title: 'مطور ويب',
    category: 'software',
    level: 'مبتدئ',
    description: 'ينشئ مواقع ويب جذابة وسهلة الاستخدام',
    skills: ['HTML/CSS', 'JavaScript', 'React/Vue', 'Responsive Design'],
    certifications: ['FreeCodeCamp Certificates', 'Google UX Design'],
    projects: ['موقع شخصي', 'متجر إلكتروني بسيط'],
    resources: [
      { name: 'FreeCodeCamp', url: 'https://freecodecamp.org' },
      { name: 'MDN Web Docs', url: 'https://developer.mozilla.org' }
    ]
  },
  {
    id: 7,
    title: 'عالم بيانات',
    category: 'data',
    level: 'متوسط',
    description: 'يفسر مجموعات البيانات الكبيرة لتقديم رؤى قابلة للتنفيذ',
    skills: ['Python/R', 'SQL', 'Machine Learning', 'Data Visualization'],
    certifications: ['IBM Data Science Certificate', 'Google Data Analytics'],
    projects: ['تحليل بيانات المبيعات', 'نموذج تنبؤي'],
    resources: [
      { name: 'Kaggle Learn', url: 'https://kaggle.com/learn' },
      { name: 'Coursera Data Science', url: 'https://coursera.org/specializations/jhu-data-science' }
    ]
  },
  {
    id: 8,
    title: 'مهندس تعلم الآلة',
    category: 'ai',
    level: 'متقدم',
    description: 'يطور خوارزميات الذكاء الاصطناعي المتقدمة',
    skills: ['Deep Learning', 'MLOps', 'Model Deployment', 'Advanced Python'],
    certifications: ['TensorFlow Developer Certificate', 'AWS ML Specialty'],
    projects: ['نظام توصيات ذكي', 'نموذج رؤية حاسوبية'],
    resources: [
      { name: 'Fast.ai', url: 'https://fast.ai' },
      { name: 'Papers With Code', url: 'https://paperswithcode.com' }
    ]
  }
];

export const featuredJobs = jobs.slice(0, 6);

export const tipOfTheWeek = {
  title: 'مقدمة في الذكاء الاصطناعي للجميع',
  description: 'دورة ممتازة للمبتدئين يقدمها البروفيسور أندرو نج، تغطي المفاهيم الأساسية للذكاء الاصطناعي بطريقة مبسطة ومفهومة.',
  url: 'https://www.coursera.org/learn/ai-for-everyone',
  provider: 'Coursera',
  duration: '4 أسابيع',
  level: 'مبتدئ'
};

