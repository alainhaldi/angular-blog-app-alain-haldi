import { Component, signal, WritableSignal } from '@angular/core';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogEntry, BlogService } from '../services/blog-service/blog.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [BlogCardComponent, CommonModule, MatProgressSpinnerModule],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.scss',
})
export class HomeScreenComponent {
  isLoading = signal(true);
  blogs: WritableSignal<BlogEntry[]> = signal<BlogEntry[]>([]);

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.blogs = this.blogService.blogs;
      this.isLoading.set(false);
    }, 2000);
  }
}
