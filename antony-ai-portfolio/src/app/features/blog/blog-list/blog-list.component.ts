import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BLOGS } from '../data/blog-data';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, FormsModule],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  blogs = BLOGS;
  searchTerm = '';
  filteredBlogs = BLOGS;
  selectedTag = '';

  filterByTag(tag: string) {

    this.selectedTag = tag;

    this.filteredBlogs = BLOGS.filter(blog =>
      blog.tags.includes(tag)
    );

  }

  search() {
    this.filteredBlogs = BLOGS.filter(blog =>
      blog.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      blog.tags.join('').toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}