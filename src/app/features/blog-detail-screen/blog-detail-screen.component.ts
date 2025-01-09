import { Component, input, signal, WritableSignal } from '@angular/core';
import {
  BlogEntry,
  BlogService,
} from '../../core/services/blog-service/blog.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-blog-detail-screen',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './blog-detail-screen.component.html',
  styleUrl: './blog-detail-screen.component.scss',
})
export class BlogDetailScreenComponent {
  blogId?: string;
  blog: WritableSignal<BlogEntry | null> = signal<BlogEntry | null>(null);

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Lese die BlogId aus dem Path
    console.log(this.blogId);
    this.blogId = this.route.snapshot.paramMap.get('blogId') ?? '370';
    console.log(this.blogId);
    // Warte 2 sekunden und lade dann den Blog
    setTimeout(() => {
      this.blogService.getBlogById(this.blogId!);
    }, 2000);

    this.blog = this.blogService.blog;
  }

  isNotLoadedYet(): boolean {
    return this.blog !== null && this.blog()?.id.toString() !== this.blogId;
  }
}
