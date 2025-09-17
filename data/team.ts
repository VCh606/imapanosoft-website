export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sachin Chaudhary',
    position: '',
    bio: 'With over 20+ years of experience in education technology and workforce development, Sachin founded ImpanoSoft to address the skills gap he observed in new graduates.',
    image: '/images/sachin.jpg',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: '2',
    name: 'Saurabh Jindal',
    position: '',
    bio: 'Saurabh leads our program development and partnerships with over 10 years of experience in talent acquisition and corporate training.',
    image: '/images/saurabh.jpg',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: '3',
    name: 'Vikas Chauhan',
    position: '',
    bio: 'Vikas ensures our students have the support they need throughout their internship journey, drawing from his background in counseling and career development.',
    image: '/images/vikas.jpg',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: '4',
    name: 'Vishal Chaudhary',
    position: '',
    bio: 'Vishal oversees our platform development and technical training programs, bringing expertise from his years as a software engineer and tech educator.',
    image: '/images/vishal.jpg',
    linkedin: '#',
    twitter: '#'
  }
];