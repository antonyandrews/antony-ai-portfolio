import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent {

  projects = [
    {
      title: 'AI Resume Analyzer Platform',
      problem: 'Users struggled to optimize resumes for modern hiring systems.',
      solution: 'Built Angular frontend with AI integration to analyze resumes and provide improvement suggestions using OpenAI.',
      impact: 'Increased resume shortlisting rate by 40%.',
      tech: ['Angular 20', 'Express.js', 'OpenAI API'],
      image: 'assets/projects/ai-resume.jpg'
    },
    {
      title: 'Enterprise E-Commerce System',
      problem: 'Client required scalable cart management and secure authentication.',
      solution: 'Developed Angular 20 application using signals and JWT refresh token system with Express backend.',
      impact: 'Handled 10k+ users with high performance and secure architecture.',
      tech: ['Angular Signals', 'Node.js', 'JWT Auth'],
      image: 'assets/projects/ecommerce.jpg'
    },
    {
      title: 'AI Chat Integration for SaaS',
      problem: 'Startup wanted AI assistant embedded into their dashboard.',
      solution: 'Integrated custom AI chat module with secure backend proxy and real-time responses.',
      impact: 'Reduced customer support load by 30%.',
      tech: ['Angular', 'WebSocket', 'OpenAI'],
      image: 'assets/projects/ai-chat.jpg'
    }
  ];
}