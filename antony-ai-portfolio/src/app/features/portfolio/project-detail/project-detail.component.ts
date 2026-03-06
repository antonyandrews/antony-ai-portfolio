import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS } from '../project-data';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {

  project: any;

  constructor(route: ActivatedRoute) {
    const slug = route.snapshot.paramMap.get('slug');
    this.project = PROJECTS.find(p => p.slug === slug);
  }

}