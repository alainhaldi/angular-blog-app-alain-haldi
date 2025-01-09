import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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

  onSubmit() {
    console.log('Submitted');
  }
}
