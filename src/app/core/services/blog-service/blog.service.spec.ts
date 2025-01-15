import { TestBed } from '@angular/core/testing';
import { BlogService } from './blog.service';
import { provideHttpClient } from '@angular/common/http';

describe('BlogService', () => {
  let service: BlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogService, provideHttpClient()], // Services have to be provided
    });
    service = TestBed.inject(BlogService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
