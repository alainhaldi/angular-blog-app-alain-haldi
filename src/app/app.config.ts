import {
  ApplicationConfig,
  ErrorHandler,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { GlobalErrorHandler } from './core/services/global-error-handler-service/globalerrorhandler.service';
import { authConfig } from './core/services/auth-service/auth.config';
import { provideAuth } from 'angular-auth-oidc-client';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAuth(authConfig),
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
};
