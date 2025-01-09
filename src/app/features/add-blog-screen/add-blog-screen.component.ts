import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BlogService } from '../../core/services/blog-service/blog.service';

@Component({
  selector: 'app-add-blog-screen',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-blog-screen.component.html',
  styleUrl: './add-blog-screen.component.scss',
})
export class AddBlogScreenComponent {
  // Create Form
  form = new FormGroup({
    title: new FormControl('', {
      // Adding existing Validators
      validators: [Validators.required],
    }),
    content: new FormControl('', {
      validators: [Validators.minLength(6), Validators.required],
    }),
  });

  constructor(private blogService: BlogService) {}

  get titleIsValid() {
    return (
      this.form.controls.title.touched &&
      this.form.controls.title.dirty &&
      this.form.controls.title.invalid
    );
  }

  get contentIsValid() {
    return (
      this.form.controls.content.touched &&
      this.form.controls.content.dirty &&
      this.form.controls.content.invalid
    );
  }

  get showButton() {
    return this.form.controls.content.valid && this.form.controls.title.valid;
  }

  onSubmit() {
    console.log('Submitted');
    this.blogService.addBlog(
      this.form.controls.title.value!,
      this.form.controls.content.value!
    );
    this.onReset();
  }

  onReset() {
    this.form.reset();
  }
}
