import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { DataService } from "../../services/data-service/data.service";
import { catchError, from, map, of, switchMap } from "rxjs";
import { loadBlogsFailure, loadBlogsSuccess } from "./blogcard.actions";
import { AppState } from "../app.state";
import { loadBlogs } from "./blogcard.actions";


@Injectable()
export class BlogcardEffects {
    constructor(
        private actions$: Actions, 
        private store: Store<AppState>, 
        private dataService: DataService
    ) {}

    loadBlogs$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadBlogs),
            switchMap (() =>
                // Call the getTodos method, convert it to an observable
                from(this.dataService.loadBlogs()).pipe(
                    // Take the returned value and return a new success action contai
                    map((blogs) => loadBlogsSuccess ({ blogs })),
                    // Or... if it errors return a new failure action containing the
                    catchError((error) => of(loadBlogsFailure({ error })))
                )
            )
        )
    );

}