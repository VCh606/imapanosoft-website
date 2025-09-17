export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  featured: boolean;
  program: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'Software Developer',
    company: 'Tech Innovations Inc.',
    image: '/images/sarah.jpg',
    quote: 'My internship at ImpanoSoft completely transformed my career path. The hands-on experience and mentorship I received were invaluable. I went from classroom theory to building real applications that users actually interact with.',
    featured: true,
    program: 'Software Development Internship'
  },
  {
    id: '2',
    name: 'Michael Chen',
    position: 'Data Analyst',
    company: 'Data Insights Co.',
    image: '/images/michael.jpg',
    quote: 'The Data Science Fellowship gave me the practical skills I needed to transition into the tech industry. The projects were challenging but incredibly rewarding, and the network I built during the program helped me land my current role.',
    featured: true,
    program: 'Data Science Fellowship'
  },
  {
    id: '3',
    name: 'Jessica Williams',
    position: 'Marketing Specialist',
    company: 'Digital Growth Agency',
    image: '/images/jessica.jpg',
    quote: 'As a marketing major, I thought I knew digital marketing until I joined the ImpanoSoft apprenticeship. Working on actual campaigns with measurable results was a game-changer for my resume and confidence.',
    featured: true,
    program: 'Digital Marketing Apprenticeship'
  },
  {
    id: '4',
    name: 'David Kim',
    position: 'UX Designer',
    company: 'Creative Solutions Ltd.',
    image: '/images/david.jpg',
    quote: 'The UX/UI Design Internship provided me with a structured learning environment where I could apply design thinking to real products. My portfolio from the program was the main reason I got multiple job offers.',
    featured: false,
    program: 'UX/UI Design Internship'
  }
];