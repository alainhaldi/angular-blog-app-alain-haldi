import { ResolveFn } from '@angular/router';
import { DataService } from '../services/data-service/data.service';
import { inject } from '@angular/core';

export const dataResolver: ResolveFn<any> = (route, state) => {
    const dataService = inject(DataService);
    console.log('=> Starting: dataResolver')
    return dataService.getBlogById('265');      // Preload the first Blog
};