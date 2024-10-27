// blog-store.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly apiUrl = 'https://d-cap-blog-backend---v2.whitepond-b96fee4b.westeurope.azurecontainerapps.io';
  
  // BehaviorSubject to hold the current state
  private entriesSubject = new BehaviorSubject<BlogEntry[]>([]);
  
  // Observable that components can subscribe to
  entries$ = this.entriesSubject.asObservable(); // $ indicates observable

  constructor(private readonly http: HttpClient) {
    // Load initial data
    this.getEntries();
  }

  // Get current entries without subscribing
  get entries(): BlogEntry[] {
    return this.entriesSubject.value;
  }

  // Load entries from API
  getEntries(): void {
    this.http.get<{ data: BlogEntry[] }>(`${this.apiUrl}/entries`)  // Convert Json to Typescript
      .pipe(
        
        tap(response => {
          console.log('Fetched entries:', response.data);
          console.log(`Received ${response.data.length} objects`);
        })
      )
      .subscribe({
        next: (response) => {
          const entries = response.data; // Extract data
          this.entriesSubject.next(entries);
        },
        error: (error) => console.error('Error loading entries:', error)
      });
  }  
}