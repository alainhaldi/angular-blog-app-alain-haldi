import { TestBed, ComponentFixture } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { BlogCardComponent } from './blog-card.component';
import { BlogEntry } from '../../services/blog-service/blog.service';
import { By } from '@angular/platform-browser';

describe('BlogCardComponent', () => {
  let fixture: ComponentFixture<BlogCardComponent>;
  let component: BlogCardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCardComponent],
      providers: [provideRouter([])], // Router für `RouterLink` bereitstellen
    }).compileComponents();

    fixture = TestBed.createComponent(BlogCardComponent);
    component = fixture.componentInstance;

    // Create Test Blog Object
    let expectedBlog: BlogEntry = {
      id: 42,
      title: 'TestTitle',
      content: 'TestContent',
      likedByMe: true,
      author: 'TestAuthor',
      comments: 5,
      createdAt: '10',
      headerImageUrl: 'TestUrl',
      likes: 10,
    };

    // Set the expectedBlog as Input for the 'blogEntry' variable in the component
    fixture.componentRef.setInput('blogEntry', expectedBlog);

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain TestTitle', () => {
    const titleElement = fixture.debugElement.query(By.css('mat-card-title')); // HTML Element for Title
    const titleContent = titleElement.nativeElement.textContent.trim();
    expect(titleContent).toBe('TestTitle');
  });

  it('should contain 10 likes', () => {
    const likesElement = fixture.debugElement.query(By.css('#likes')); // Access <p id='likes'>
    const likesContent = likesElement.nativeElement.textContent.trim();
    expect(likesContent).toBe('10');
  });

  it('should have the correct routerLink', () => {
    const headerElement = fixture.debugElement.query(By.css('mat-card-header')); // Get HTML Element
    const routerLink = headerElement.attributes['ng-reflect-router-link']; // Access RouterLink
    expect(routerLink).toBe('/detail,42');
  });
});
