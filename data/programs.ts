export interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: string;
  location: string;
  category: string;
  featured: boolean;
  skills: string[];
  responsibilities: string[];
  benefits: string[];
}

export const programs: Program[] = [
  {
    id: '1',
    title: 'Software Development Internship',
    description: 'Gain hands-on experience in software development working on real projects with experienced mentors.',
    duration: '3-6 months',
    type: 'Full-time',
    location: 'Remote',
    category: 'Technology',
    featured: true,
    skills: ['JavaScript', 'React', 'Node.js', 'Python'],
    responsibilities: [
      'Develop and maintain web applications',
      'Collaborate with cross-functional teams',
      'Participate in code reviews',
      'Write clean, maintainable code'
    ],
    benefits: [
      'Mentorship from senior developers',
      'Stipend or salary',
      'Flexible working hours',
      'Certificate of completion'
    ]
  },
  {
    id: '2',
    title: 'Data Science Fellowship',
    description: 'Immerse yourself in data analysis, machine learning, and statistical modeling with industry experts.',
    duration: '4-8 months',
    type: 'Full-time',
    location: 'Remote',
    category: 'Data',
    featured: true,
    skills: ['Python', 'R', 'SQL', 'Machine Learning'],
    responsibilities: [
      'Analyze large datasets',
      'Build predictive models',
      'Create data visualizations',
      'Present findings to stakeholders'
    ],
    benefits: [
      'Access to real-world datasets',
      'Professional networking opportunities',
      'Portfolio development',
      'Potential job offer'
    ]
  },
  {
    id: '3',
    title: 'Digital Marketing Apprenticeship',
    description: 'Learn and execute digital marketing strategies including SEO, SEM, social media, and content marketing.',
    duration: '3-5 months',
    type: 'Part-time',
    location: 'Remote',
    category: 'Marketing',
    featured: true,
    skills: ['SEO', 'Google Analytics', 'Content Creation', 'Social Media'],
    responsibilities: [
      'Develop and implement marketing campaigns',
      'Analyze campaign performance',
      'Create engaging content',
      'Manage social media channels'
    ],
    benefits: [
      'Hands-on campaign management',
      'Certification in digital marketing',
      'Networking with industry professionals',
      'Letter of recommendation'
    ]
  },
  {
    id: '4',
    title: 'UX/UI Design Internship',
    description: 'Create user-centered designs for digital products while learning industry-standard tools and methodologies.',
    duration: '3-6 months',
    type: 'Full-time',
    location: 'On-site',
    category: 'Design',
    featured: false,
    skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping'],
    responsibilities: [
      'Conduct user research',
      'Create wireframes and prototypes',
      'Collaborate with developers',
      'Participate in design critiques'
    ],
    benefits: [
      'Design mentorship',
      'Portfolio projects',
      'Design software access',
      'Industry exposure'
    ]
  }
];