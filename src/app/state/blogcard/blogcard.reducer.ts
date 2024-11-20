import { createReducer, on } from "@ngrx/store";
import { BlogEntry } from "../../services/data-service/data.service";
import { loadBlogs, loadBlogsSuccess } from "./blogcard.actions";


export interface BlogState {
    blogs: BlogEntry[];
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: BlogState = {
    blogs: [],
    error: '',
    status: 'pending',
}

export const blogReducer = createReducer(
    // Supply the initial state
    initialState,
    // Trigger loading the blogs
    on(loadBlogs, (state) => ({ ...state, status: 'loading' as 'loading'})),
    // Handle successfully loaded blogs
    on(loadBlogsSuccess, (state, { blogs }) => ({
        ...state,
        blogs: blogs,
        error: '',
        status: 'success' as 'success',
    })),
);