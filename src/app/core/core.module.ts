// import { NgModule } from '@angular/core';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { DataService } from '../data.service';
// import { LoggingInterceptor } from './logging.interceptor';

// @NgModule({
//   providers: [
//     DataService,
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: LoggingInterceptor,
//       multi: true,
//     },
//   ],
// })
// export class CoreModule {
//   constructor() {
//     console.log('CoreModule instantiated'); // Log to check module loading
//   }
// }