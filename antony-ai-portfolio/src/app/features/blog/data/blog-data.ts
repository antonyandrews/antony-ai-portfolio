import { Blog } from '../models/blog.model';

export const BLOGS: Blog[] = [

  {
    id: 1,
    title: 'Angular Signals: The Future of Reactive State',
    slug: 'angular-signals-future-reactive-state',
    excerpt:
      'Angular Signals introduce a new paradigm for reactive state management that simplifies application architecture and improves performance.',
    author: 'Antony Andrews',
    date: '2026-01-10',
    readTime: '6 min read',
    tags: ['Angular', 'Signals', 'State Management'],
    image: '/assets/blogs/angular_signals.png',

    content: [

      {
        type: 'paragraph',
        text: 'Angular Signals introduce a modern reactive state system designed to simplify application architecture while improving performance.'
      },

      { type: 'heading', level: 2, text: 'What Are Angular Signals?' },

      {
        type: 'paragraph',
        text: 'Signals are reactive primitives that track state changes automatically. Unlike traditional RxJS streams, signals provide fine-grained reactivity.'
      },

      {
        type: 'list',
        items: [
          'Simple reactive primitives',
          'Automatic dependency tracking',
          'Better performance than traditional change detection'
        ]
      },

      { type: 'heading', level: 3, text: 'Example of Angular Signal' },

      {
        type: 'code',
        language: 'typescript',
        code: `
import { signal } from '@angular/core';

const counter = signal(0);

function increment(){
  counter.update(v => v + 1);
}
`},

      {
        type: 'quote',
        text: 'Signals represent the next evolution of Angular state management.'
      }

    ]
  },

  {
    id: 2,
    title: 'Building AI Features in Angular Applications',
    slug: 'building-ai-features-angular',
    excerpt: 'Artificial intelligence can dramatically enhance Angular applications by providing smart automation and user assistance.',
    author: 'Antony Andrews',
    date: '2026-01-15',
    readTime: '7 min read',
    tags: ['Angular', 'AI', 'OpenAI'],
    image: '/assets/blogs/ai-features.png',

    content: [

      {
        type: 'paragraph',
        text: 'AI features are rapidly becoming essential in modern applications. Angular can integrate AI services to provide chatbots, recommendations and intelligent automation.'
      },

      { type: 'heading', level: 2, text: 'Common AI Features for Web Apps' },

      {
        type: 'list',
        items: [
          'AI chat assistants',
          'Smart search',
          'Content generation',
          'Image recognition'
        ]
      },

      { type: 'heading', level: 3, text: 'Example AI Service in Angular' },

      {
        type: 'code',
        language: 'typescript',
        code: `
@Injectable({ providedIn:'root'})
export class AiService{

constructor(private http:HttpClient){}

chat(prompt:string){
 return this.http.post('/api/chat',{prompt})
}

}
`},

      {
        type: 'paragraph',
        text: 'Using this architecture you can integrate AI APIs while keeping the Angular frontend clean and maintainable.'
      }

    ]
  },

  {
    id: 3,
    title: 'Angular Enterprise Architecture (2025 Guide)',
    slug: 'angular-enterprise-architecture',
    excerpt: 'Enterprise Angular applications require scalable architecture patterns for maintainability and performance.',
    author: 'Antony Andrews',
    date: '2026-01-20',
    readTime: '8 min read',
    tags: ['Angular', 'Architecture', 'Enterprise'],
    image: '/assets/blogs/angular_archi.png',

    content: [

      {
        type: 'paragraph',
        text: 'Enterprise Angular applications require a clear architectural structure to support long-term scalability.'
      },

      { type: 'heading', level: 2, text: 'Recommended Project Structure' },

      {
        type: 'code',
        language: 'typescript',
        code: `
src
 core
 shared
 features
  auth
  dashboard
  products
`},

      {
        type: 'list',
        items: [
          'Core module for singleton services',
          'Shared module for reusable components',
          'Feature modules for domain logic'
        ]
      },

      {
        type: 'quote',
        text: 'A well designed architecture reduces long-term maintenance costs.'
      }

    ]
  },

  {
    id: 4,
    title: 'Angular Performance Optimization Guide',
    slug: 'angular-performance-optimization',
    excerpt: 'Optimizing Angular applications improves load time, scalability and user experience.',
    author: 'Antony Andrews',
    date: '2026-01-25',
    readTime: '7 min read',
    tags: ['Angular', 'Performance'],
    image: '/assets/blogs/ai_performance.png',

    content: [

      {
        type: 'paragraph',
        text: 'Performance is critical for modern web applications. Angular provides several techniques to optimize rendering and reduce bundle size.'
      },

      { type: 'heading', level: 2, text: 'Key Optimization Techniques' },

      {
        type: 'list',
        items: [
          'Use OnPush change detection',
          'Lazy load feature modules',
          'Use signals for reactive state',
          'Optimize bundle size'
        ]
      },

      { type: 'heading', level: 3, text: 'OnPush Example' },

      {
        type: 'code',
        language: 'typescript',
        code: `
@Component({
 changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent{}
`}

    ]
  },

];