import { createSelector } from "@ngrx/store";
import { BlogState } from "./blogcard.reducer";
import { AppState } from "../app.state";


export const selectBlogs = (state: AppState) => state.blogs;
export const selectAllBlogs = createSelector(
    selectBlogs,
    (state: BlogState) => state.blogs
)