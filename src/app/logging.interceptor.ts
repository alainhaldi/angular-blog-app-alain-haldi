// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';

// @Injectable()
// export class LoggingInterceptor implements HttpInterceptor {
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // Generate a correlation ID (this can be improved)
//     const correlationId = this.generateCorrelationId();

//     // Clone the request and set the new header
//     const clonedRequest = request.clone({
//       setHeaders: {
//         'X-Correlation-ID': correlationId
//       }
//     });

//     console.log(`Request with Correlation ID: ${correlationId}`, clonedRequest);

//     // Log the request details
//     return next.handle(clonedRequest).pipe(
//       tap({
//         next: event => {
//           console.log('Response:', event);
//         },
//         error: error => {
//           console.error('Error Response:', error);
//         }
//       })
//     );
//   }

//   // Example function to generate a unique correlation ID
//   private generateCorrelationId(): string {
//     return 'id-' + Math.random().toString(36).substr(2, 9); // Simple random ID
//   }
// }