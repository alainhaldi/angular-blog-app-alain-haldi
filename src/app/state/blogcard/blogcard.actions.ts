import { createAction, props } from '@ngrx/store';
import { BlogEntry } from '../../services/data-service/data.service';


export const loadBlogs = createAction('[Blog Page] Load Blogs');

export const loadBlogsSuccess = createAction(
    '[Todo API] Todo Load Success', 
    props<{ blogs: BlogEntry[] }>()
);

export const loadBlogsFailure = createAction(
    '[Todo APIl Todo Load Failure', 
    props<{ error: string }>()
);