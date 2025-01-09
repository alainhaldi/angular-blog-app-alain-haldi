import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../../core/services/error-service/error.service';

@Component({
  selector: 'app-error-screen',
  standalone: true,
  imports: [],
  templateUrl: './error-screen.component.html',
  styleUrl: './error-screen.component.scss',
})
export class ErrorScreenComponent implements OnInit {
  errorMessage: string | null = null;

  constructor(private errorService: ErrorService) {}

  ngOnInit(): void {
    // Fetch error details if you are passing them via a service or state
    this.errorMessage = this.errorService.getError();
  }
}
