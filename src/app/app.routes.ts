import { Routes } from '@angular/router';
import { HomeScreenComponent } from './core/home-screen/home-screen.component';

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
      import('./features/not-found/not-found.component').then(
        (mod) => mod.NotFoundComponent
      ),
  },
];
