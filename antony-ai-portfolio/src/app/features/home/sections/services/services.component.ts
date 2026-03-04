import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  services = [
    {
      title: 'Angular Enterprise Applications',
      description: 'Build scalable, maintainable Angular 20 applications with clean architecture, signals, and performance optimization.',
      icon: '⚡'
    },
    {
      title: 'AI Integration & Automation',
      description: 'Integrate OpenAI, chatbots, AI assistants, resume analyzers, and automation systems into modern web apps.',
      icon: '🤖'
    },
    {
      title: 'Secure Backend & APIs',
      description: 'Design Express.js APIs with JWT, refresh tokens, encryption, and enterprise-level security standards.',
      icon: '🔐'
    },
    {
      title: 'UI/UX & Modern SaaS Design',
      description: 'Create premium Angular Material themes, dark mode systems, and responsive enterprise dashboards.',
      icon: '🎨'
    }
  ];

}