import { AfterViewInit, Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BLOGS } from '../data/blog-data';
import { Meta, Title } from '@angular/platform-browser';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements AfterViewInit {

  blog: any;
  readingProgress = 0;
  currentUrl = window.location.href;

  @HostListener('window:scroll', [])
  onScroll() {

    const winScroll =
      document.body.scrollTop ||
      document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    this.readingProgress = (winScroll / height) * 100;

  }

  constructor(
    private route: ActivatedRoute,
    private meta: Meta,
    private title: Title
  ) {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.blog = BLOGS.find(b => b.slug === slug);

    if (this.blog) {
      this.title.setTitle(this.blog.title);
      this.meta.updateTag({
        name: 'description',
        content: this.blog.excerpt
      });
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block as HTMLElement);
      });
    }, 0);
  }
}