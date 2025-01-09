import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { z } from 'zod';

export interface BlogEntry {
  id: number;
  title: string;
  content?: string;
  contentPreview?: string;
  likedByMe: boolean;
  author: string;
  comments: number;
  createdAt: string;
  headerImageUrl: string;
  likes: number;
}

// Define Zod schema for validation
const BlogEntrySchema = z.object({
  id: z.number(),
  title: z.string(),
  // content: z.string(),
  likedByMe: z.boolean(),
  author: z.string(),
  comments: z.number(),
  createdAt: z.string(),
  // headerImageUrl: z.string(),
  likes: z.number(),
});

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  readonly apiUrl = '/api';
  // private blogs = signal([1, 2, 3, 4, 5]);
  // publicBlogs = this.blogs;
  // private blog = signal<BlogEntry | null>(null);
  // publicBlog = this.blog.asReadonly();

  private _blogs = signal<BlogEntry[]>([]);
  private _blog = signal<BlogEntry | null>(null);

  constructor(private http: HttpClient) {
    console.log('Succesfully creating DataService');
    this.loadBlogs();
  }

  get blog() {
    return this._blog;
  }

  get blogs() {
    return this._blogs;
  }

  // Get All Blogs
  loadBlogs(): void {
    console.log('=> STARTING: loadBlogs');

    // new header
    const headers = new HttpHeaders().set('X-Auth', 'userId');

    this.http
      .get<{ data: BlogEntry[] }>(`${this.apiUrl}/entries`, { headers })
      // if request successful
      .pipe(
        tap((response) => {
          console.log('Fetched blogs:', response.data);
          console.log(`Received ${response.data.length} objects`);

          // Compare Input with the Zod-Schema
          const validatedblogs = response.data
            .map((entry) => {
              const result = BlogEntrySchema.safeParse(entry);
              if (!result.success) {
                console.error('Validation error:', result.error);
                return null;
              }
              console.log('Validation successful:', result.data);
              return result.data;
              // Filter all Null Objects
            })
            .filter((entry): entry is BlogEntry => entry !== null);

          // Update the blogs list
          this._blogs.set(validatedblogs);
        })
      )
      .subscribe({
        error: (error) => console.error('Error loading blogs:', error),
      });
  }

  getBlogById(id: string): void {
    console.log('=> STARTING: getBlogById');

    const headers = new HttpHeaders().set('X-Auth', 'userId');

    this.http
      .get<BlogEntry>(`${this.apiUrl}/entries/${id}`, { headers })
      .pipe(
        tap((response) => {
          // Set the fetched data into the signal
          this._blog.set(response);
          console.log(response.title);
        })
      )
      .subscribe({
        error: (error) => console.error('Error fetching blog by ID:', error),
      });
  }

  // Funktioniert aktuell noch nicht ganz
  addBlog(title: string, content: string) {
    console.log('=> STARTING: addBlog');
    let headerImageUrl =
      'https://imgix.bustle.com/inverse/43/e9/9e/ac/0c64/4d0e/a2bc/dda1d61a31db/on-fire.jpeg?w=672&h=379&fit=crop&crop=faces&dpr=2&blend=151515&blendAlpha=40&blendMode=normal';

    this.http
      .post(`${this.apiUrl}/entries`, {
        title: title,
        content: content,
        headerImageUrl: headerImageUrl,
      })
      .pipe(
        catchError((error) => {
          return throwError(() => new Error('Failed to store selected place.'));
        })
      );
  }
}
