import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorService } from './services/error-service/error.service';
import { Router } from '@angular/router';


const environment = {
  production: true,  
  serviceUrl: 'http://localhost:4200'  // Angular Project url
};

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private errorService: ErrorService, private router: Router) {}

  handleError(error: Error): void {
    const message = error.message ? error.message : error.toString();
    this.errorService.setError(message);  // Store the error message in the ErrorService
    // this.postCustomData(error, message);
    if (environment.production) {
      console.log('ERROR ->', error);
      console.log('Message ->', message);

      this.router.navigate(['/error']);  // Angular Router will handle navigation 
    } else {
      console.log('ERROR ->', error);
    }
  }

  postCustomData(error: Error, message: string) {
    const req = new XMLHttpRequest();
    req.open('POST', `${environment.serviceUrl}/api/report-error/client-fatal`);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(
      `{ "client-message" : ${JSON.stringify(message || '')}, "client-error": ${JSON.stringify(error.stack || '')}}`
    );
  }
}