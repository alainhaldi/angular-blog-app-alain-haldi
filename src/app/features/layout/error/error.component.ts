import { Component, OnInit } from '@angular/core';
import { GlobalErrorHandler } from '../../../services/global-error-handler/globalerrorhandler.service';
import { ErrorService } from '../../../services/error-service/error.service';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent  implements OnInit {
 
    errorMessage: string | null = null;
  
    constructor(private errorService: ErrorService) {}
  
    ngOnInit(): void {
      // Fetch error details if you are passing them via a service or state
      this.errorMessage = this.errorService.getError(); 
    }
  }


