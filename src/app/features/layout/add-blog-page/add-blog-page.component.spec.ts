import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogPageComponent } from './add-blog-page.component';

describe('AddBlogPageComponent', () => {
  let component: AddBlogPageComponent;
  let fixture: ComponentFixture<AddBlogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBlogPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
