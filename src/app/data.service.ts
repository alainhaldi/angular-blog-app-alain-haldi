// Make http Requests; Define BlogEntry; Validate with ZOD

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { z } from 'zod';

// Define interfaces for your data
export interface BlogEntry {
  id: number;
  title: string;
  contentPreview: string;
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
  contentPreview: z.string(),
  likedByMe: z.boolean(),
  author: z.string(),
  comments: z.number(),
  createdAt: z.string(),
  headerImageUrl: z.string().url(),
  likes: z.number(),
});

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly apiUrl = '/api';
  private readonly blogsSubject$ = new BehaviorSubject<BlogEntry[]>([]); // Save data class internly
  blogs$ = this.blogsSubject$.asObservable(); // makes data accessable for other classes

  constructor(private readonly http: HttpClient) {
    console.log('Succesfully creating DataService')
    this.loadBlogs();
  }

  get blogs(): BlogEntry[] {
    return this.blogsSubject$.value;
  }

  // Get All Blogs
  loadBlogs(): void {
    console.log('Starting: loadBlogs')

    // new header
    const headers = new HttpHeaders().set('X-Auth', 'userId');

    this.http.get<{ data: BlogEntry[] }>(`${this.apiUrl}/entries`, {headers})
      // if request successful
      .pipe(
        tap(response => {
          console.log('Fetched blogs:', response.data);
          console.log(`Received ${response.data.length} objects`);

          // Compare Input with the Zod-Schema
          const validatedblogs = response.data.map(entry => {
            const result = BlogEntrySchema.safeParse(entry);
            if (!result.success) {
              console.error('Validation error:', result.error);
              return null;
            }
            console.log('Validation successful:', result.data);
            return result.data;
          // Filter all Null Objects
          }).filter((entry): entry is BlogEntry => entry !== null);

          // Update the blogs list
          this.blogsSubject$.next(validatedblogs);
        })
      )
      .subscribe({
        error: (error) => console.error('Error loading blogs:', error)
      });
  }

  // Get Blog with ID
  // loadBlogByID(blogID: number) {
  //   console.log('Starting: loadBlogByID')

  //   this.http.get<{ data: BlogEntry}>(`${this.apiUrl}/entries/${blogID}`)
  //     // if request successful
  //     .pipe(
  //       tap(response => {
  //         console.log('Fetched blog:', response.data);
  //         console.log(`Received blog: ${response.data.id}`);

  //         // Set current blog
  //       })
  //     )
  // }

  // Methode zum Laden eines Blogs mit ID
  loadBlogByID(blogID: number): Observable<BlogEntry> {
    console.log('=> Starting: loadBlogByID')
    return this.http.get<{ data: BlogEntry }>(`${this.apiUrl}/entries/${blogID}`)
      .pipe(
        // Verarbeite die Antwort
        map(response => {
          // Überprüfe die Antwort mit dem Zod-Schema
          const result = BlogEntrySchema.safeParse(response.data);
          if (!result.success) {
            console.error('Validation error:', result.error);
            throw new Error('Invalid blog data');
          }
          console.log(`Sucessfully load: ${result.data.id} - ${result.data.author}`);
          return result.data; // Rückgabe des validierten Blog-Objekts
        })
      
        

      );
  }
  
}