import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BLOGS } from '../blog-data';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent {

  blog: any;

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
}