import { Routes } from '@angular/router';
import { HomePageComponent } from './core/layout/home-page/home-page.component';
import { dataResolver } from './resolvers/data.resolver';

export const routes: Routes = [
	{path: '', component: HomePageComponent, resolve: {data: dataResolver}},   // '' -> standard url
    {
		path: 'detail/:id', 
		loadComponent: () => import('./features/layout/detail-page/detail-page.component').then((c) => c.DetailPageComponent),
	}, // lazy loading & parameter
	{path: 'error', loadComponent: () => import('./features/layout/error/error.component').then((c) => c.ErrorComponent)} 
	//Weitere Routen hier
];