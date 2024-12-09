import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor, PassedInitialConfig } from 'angular-auth-oidc-client';
import { provideAuth } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
            authority: 'https://d-cap-keyclaok.kindbay-711f60b2.westeurope.azurecontainerapps.io/',
            redirectUrl: window.location.origin,
            postLogoutRedirectUri: window.location.origin,
            clientId: 'please-enter-clientId',
            scope: 'please-enter-scopes', // 'openid profile ' + your scopes
            responseType: 'code',
            silentRenew: true,
            silentRenewUrl: window.location.origin + '/silent-renew.html',
            renewTimeBeforeTokenExpiresInSeconds: 10,
        }
}


// Wie genau soll diese Klasse sinnmachen?? (Quelle Moodle)

// provideAuth({
//   config: {
//     authority:
//       'https://d-cap-keyclaok.kindbay-711f60b2.westeurope.azurecontainerapps.io/realms/blog',
//     redirectUrl: window.location.origin,
//     postLogoutRedirectUri: window.location.origin,
//     clientId: 'spa-blog',
//     scope: 'openid profile email offline_access blogs',
//     responseType: 'code',
//     silentRenew: true,
//     silentRenewUrl: window.location.origin + '/silent-renew.html',
//     renewTimeBeforeTokenExpiresInSeconds: 10,
//     secureRoutes: [environment.serviceUrl],
//   },
// }),
// { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },),
