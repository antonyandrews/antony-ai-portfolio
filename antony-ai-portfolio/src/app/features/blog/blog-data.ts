export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  image: string;
}

export const BLOGS: Blog[] = [
  {
    id: 1,
    title: 'Building Enterprise Angular 20 Architecture',
    slug: 'enterprise-angular-architecture',
    excerpt: 'Learn how to structure Angular 20 apps for scalability.',
    content: `
# Enterprise Angular 20 Architecture

Angular 20 introduces powerful standalone APIs...

## Key Concepts
- Feature-based structure
- Lazy loading
- Signals
- Clean separation of concerns
`,
    date: '2026-03-01',
    tags: ['Angular', 'Architecture'],
    image: 'assets/blog/angular-architecture.webp'
  },
  {
    id: 2,
    title: 'Integrating OpenAI with Angular',
    slug: 'openai-angular-integration',
    excerpt: 'Step-by-step guide to integrating AI in Angular apps.',
    content: `
# OpenAI + Angular

Integrating OpenAI into Angular requires secure API handling...

## Best Practices
- Use serverless functions
- Protect API keys
- Stream responses
`,
    date: '2026-03-02',
    tags: ['AI', 'OpenAI', 'Angular'],
    image: 'assets/blog/openai-angular.webp'
  }
];