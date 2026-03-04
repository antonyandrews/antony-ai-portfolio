import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {

  @ViewChild('typedElement') typedElement!: ElementRef;

  ngAfterViewInit(): void {
    new Typed(this.typedElement.nativeElement, {
      strings: [
        'Angular Architect',
        'AI Engineer',
        'Enterprise Tech Lead',
        'Freelance Consultant'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });
  }
}