import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { ServicesComponent } from './sections/services/services.component';
import { FeaturedProjectsComponent } from './sections/featured-projects/featured-projects.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { ContactComponent } from "./sections/contact/contact.component";
import { AiLiveDemoComponent } from './sections/ai-live-demo/ai-live-demo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ServicesComponent, FeaturedProjectsComponent, TestimonialsComponent, ContactComponent, AiLiveDemoComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent { }