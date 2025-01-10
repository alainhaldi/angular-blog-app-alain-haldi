import { CanActivateFn, Router, Routes } from '@angular/router';
import { HomeScreenComponent } from './core/home-screen/home-screen.component';
import { inject } from '@angular/core';
import { AuthService } from './core/services/auth-service/auth.service';
import { take, map, catchError, of } from 'rxjs';
import { hasRole } from './core/services/auth-service/jwt';

const isAuthenticatedGuard: CanActivateFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getLoginResponse().pipe(
    take(1),
    map((loginResponse) => {
      if (!loginResponse.isAuthenticated) {
        authService.login();
        return false;
      }

      if (hasRole('', loginResponse.accessToken)) {
        return true;
      }

      return router.parseUrl('');
    }),
    catchError((error) => {
      console.error('Error in isAuthenticatedGuard:', error);
      authService.login();
      return of(false);
    })
  );
};

export const routes: Routes = [
  // Default Route
  { path: '', component: HomeScreenComponent },
  // Lazy Loaded
  {
    path: 'detail/:blogId',
    loadComponent: () =>
      import('./features/blog-detail-screen/blog-detail-screen.component').then(
        (mod) => mod.BlogDetailScreenComponent
      ),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./features/add-blog-screen/add-blog-screen.component').then(
        (mod) => mod.AddBlogScreenComponent
      ),
    // canActivate: [isAuthenticatedGuard],
  },

  // Fallback Route falls falscher Path
  {
    path: 'error',
    loadComponent: () =>
      import('./features/error-screen/error-screen.component').then(
        (mod) => mod.ErrorScreenComponent
      ),
  },
  // Fallback Route falls falscher Path muss am Ende sein da sonst restliche Routes ignoriert
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found-screen/not-found.component').then(
        (mod) => mod.NotFoundComponent
      ),
  },
];
