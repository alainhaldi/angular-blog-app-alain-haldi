// blog-store.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
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
  private readonly apiUrl = '/api';
  private entriesSubject = new BehaviorSubject<BlogEntry[]>([]);
  entries$ = this.entriesSubject.asObservable();

  constructor(private readonly http: HttpClient) {
    this.getEntries();
  }

  get entries(): BlogEntry[] {
    return this.entriesSubject.value;
  }

  getEntries(): void {
    this.http.get<{ data: BlogEntry[] }>(`${this.apiUrl}/entries`)
      .pipe(
        tap(response => {
          console.log('Fetched entries:', response.data);
          console.log(`Received ${response.data.length} objects`);

          // Compare Inpt with the Zod-Schema
          const validatedEntries = response.data.map(entry => {
            const result = BlogEntrySchema.safeParse(entry);
            if (!result.success) {
              console.error('Validation error:', result.error);
              return null;
            }
            console.log('Validation successful:', result.data);
            return result.data;
          // Filter all Null Objects
          }).filter((entry): entry is BlogEntry => entry !== null);

          // Update the entries list
          this.entriesSubject.next(validatedEntries);
        })
      )
      .subscribe({
        error: (error) => console.error('Error loading entries:', error)
      });
  }
}