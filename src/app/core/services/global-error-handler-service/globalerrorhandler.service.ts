import { ErrorHandler, Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { ErrorService } from '../error-service/error.service';

/**
 * The Goal of the GlobalErrorHandler is to make sure all Errors are catched and made visible to the User via Routing to ErrorScreen Component
 * Note: The ErrorHandler must be add in the main.ts File
 * */

const environment = {
  production: true,
  serviceUrl: 'http://localhost:4200', // Angular Project url
};

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private errorService: ErrorService, private router: Router) {}

  handleError(error: Error): void {
    const message = error.message ? error.message : error.toString();
    this.errorService.setError(message); // Store the error message in the ErrorService
    // this.postCustomData(error, message);
    if (environment.production) {
      console.log('ERROR ->', error);
      console.log('Message ->', message);

      this.router.navigate(['/error']); // Angular Router will handle navigation
    } else {
      console.log('ERROR ->', error);
    }
  }

  postCustomData(error: Error, message: string) {
    const req = new XMLHttpRequest();
    req.open('POST', `${environment.serviceUrl}/api/report-error/client-fatal`);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(
      `{ "client-message" : ${JSON.stringify(
        message || ''
      )}, "client-error": ${JSON.stringify(error.stack || '')}}`
    );
  }
}
