import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {

  testimonials = [
    {
      name: 'Startup Founder',
      role: 'SaaS Product Owner',
      feedback: 'Antony delivered a scalable Angular application with AI integration that exceeded our expectations. Highly professional and solution-driven.',
      rating: 5
    },
    {
      name: 'Tech Manager',
      role: 'Enterprise Client',
      feedback: 'His architecture approach and secure backend implementation significantly improved our system performance and reliability.',
      rating: 5
    },
    {
      name: 'Product Director',
      role: 'AI Platform',
      feedback: 'The AI chatbot integration reduced our support workload and enhanced user engagement. Outstanding technical leadership.',
      rating: 5
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}