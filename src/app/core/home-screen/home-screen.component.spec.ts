import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { BlogEntry } from '../services/blog-service/blog.service';
import { HomeScreenComponent } from './home-screen.component';
import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('HomeScreenComponent', () => {
  let fixture: ComponentFixture<HomeScreenComponent>;
  let component: HomeScreenComponent;
  let expectedBlogs: BlogEntry[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeScreenComponent],
      providers: [provideHttpClient(), provideRouter([])], // HTTPClient bereitstellen
    }).compileComponents();

    fixture = TestBed.createComponent(HomeScreenComponent);
    component = fixture.componentInstance;

    // Testdaten setzen
    expectedBlogs = [
      {
        id: 1,
        title: 'Title1',
        content: 'Content1',
        likedByMe: true,
        author: 'Author1',
        comments: 5,
        createdAt: '10',
        headerImageUrl: 'TestUrl',
        likes: 10,
      },
      {
        id: 2,
        title: 'Title2',
        content: 'Content2',
        likedByMe: true,
        author: 'Author2',
        comments: 5,
        createdAt: '10',
        headerImageUrl: 'TestUrl',
        likes: 10,
      },
      {
        id: 3,
        title: 'Title3',
        content: 'Content3',
        likedByMe: true,
        author: 'Author3',
        comments: 5,
        createdAt: '10',
        headerImageUrl: 'TestUrl',
        likes: 10,
      },
    ];

    // Blogs in die Komponente setzen
    component.blogs.set(expectedBlogs);

    // Change Detection auslösen
    fixture.detectChanges();
    await fixture.whenStable();
    console.log(component);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //   Should Check if Array contains 3 Blog Entries
  it('should contain 3 elements', () => {
    component.blogs.set(expectedBlogs);
    const blogs = component.blogs();
    expect(blogs.length).toBe(3);
  });

  //   Should Check if 3 Blog Objects are Displayed in HTML
  it('should display 3 BlogCards', () => {
    component.blogs.set(expectedBlogs); // ?Nicht ganz klar wieso die Blogs hier nochmal gesetzt werden müssen?
    fixture.detectChanges();
    const blogCards = fixture.debugElement.queryAll(By.css('app-blog-card'));
    expect(blogCards.length).toBe(expectedBlogs.length);
  });

  // Should Check if loadingspinner is activated
  it('should show loading spinner', () => {
    component.isLoading.set(true);
    fixture.detectChanges();
    const loadingspinner = fixture.debugElement.query(By.css('mat-spinner'));
    expect(loadingspinner).toBeTruthy();
  });
});
