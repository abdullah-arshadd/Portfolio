export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  categories: string[];
  github?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with cart, checkout, and payment integration.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Stripe'],
    categories: ['react', 'next.js', 'mongodb'],
    github: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team functionality.',
    image: 'https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Supabase', 'Tailwind CSS', 'TypeScript'],
    categories: ['react', 'supabase'],
    github: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for tracking and visualizing social media engagement metrics.',
    image: 'https://images.pexels.com/photos/7260634/pexels-photo-7260634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'D3.js', 'Tailwind CSS', 'Firebase'],
    categories: ['react'],
    github: 'https://github.com',
  },
  {
    id: 4,
    title: 'Real Estate Platform',
    description: 'A property listing and search platform with interactive maps and detailed property information.',
    image: 'https://images.pexels.com/photos/7578989/pexels-photo-7578989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Next.js', 'MongoDB', 'Mapbox', 'Tailwind CSS'],
    categories: ['next.js', 'mongodb'],
    github: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    description: 'A comprehensive fitness tracking application with workout plans, progress monitoring, and nutrition tracking.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React Native', 'Supabase', 'Chart.js', 'Expo'],
    categories: ['react', 'supabase'],
    github: 'https://github.com',
  },
  {
    id: 6,
    title: 'Weather Forecast App',
    description: 'A modern weather forecasting application with location-based services and interactive visualizations.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'OpenWeatherAPI', 'CSS Modules', 'Axios'],
    categories: ['react'],
    github: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];