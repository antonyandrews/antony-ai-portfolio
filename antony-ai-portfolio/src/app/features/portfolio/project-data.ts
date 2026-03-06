export interface Project {
  title: string;
  slug: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Angular AI E-commerce Platform',
    slug: 'angular-ai-ecommerce',
    description: 'Full enterprise Angular ecommerce architecture.',
    problem: 'Client needed scalable ecommerce platform.',
    solution: 'Implemented Angular 20 modular architecture with signals and AI chatbot.',
    tech: ['Angular', 'Node', 'OpenAI'],
    image: 'assets/projects/ecommerce.png',
    github: 'https://github.com/yourrepo',
    demo: '#'
  }
];