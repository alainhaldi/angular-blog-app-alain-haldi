import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogCardComponent } from './blog-card.component';

describe('BlogCardComponent', () => {
  let component: BlogCardComponent;
  let fixture: ComponentFixture<BlogCardComponent>;

  // Will be executed before each 'it()' block to set up the test environment
  beforeEach(async () => {
    // Configures the testing module and includes the component being tested
    await TestBed.configureTestingModule({
      imports: [BlogCardComponent],
    }).compileComponents(); // Compiles the component's HTML and CSS templates

    // Creates a fixture (test environment) for the component
    fixture = TestBed.createComponent(BlogCardComponent);

    // Gets the instance of the component from the fixture
    component = fixture.componentInstance;

    // Triggers Angular's change detection to render the template and update bindings
    fixture.detectChanges();
  });

  // Test if component is created
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test if Text is correct
  it('should contain "playgound works!"', () => {
    // fixture.nativeElement provides direct access to the DOM of the component for querying, manipulating, or testing its elements.
    const playgroundElement: HTMLElement = fixture.nativeElement;
    expect(playgroundElement.textContent).toContain('playground works!');
  });

  // Test if first <p> Element conrtains Text
  it('should have <p> with "playground works!"', () => {
    // Get access to the DOM
    const playgroundElement: HTMLElement = fixture.nativeElement;
    const p = playgroundElement.querySelector('p')!;
    expect(p.textContent).toEqual('playground works!');
  });
});
