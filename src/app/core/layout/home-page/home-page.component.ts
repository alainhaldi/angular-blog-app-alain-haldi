import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { BlogcardComponent } from "../../widgets/blogcard/blogcard.component";
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { BlogEntry, DataService } from '../../../services/data-service/data.service';
import { selectAllBlogs } from '../../../state/blogcard/blogcard.selectors';
import { Store } from '@ngrx/store';
import { loadBlogs } from '../../../state/blogcard/blogcard.actions';
import { AppState } from '../../../state/app.state';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BlogcardComponent, AsyncPipe, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  // STATE MANAGEMENT with OBSERVABLES
  // _blogs$: Observable<BlogEntry[]> | undefined; // Typ ist Observable
  // ngOnInit(): void {
  //   this._blogs$ = this.dataService.blogs$; // Zuweisung des Observables
  // }

  // STATE MANAGEMENT with SIGNALS
  // blogs: WritableSignal<BlogEntry[]> = signal<BlogEntry[]>([]);

  // constructor(private readonly dataService: DataService) {}

  // ngOnInit(): void {
  //   this.blogs = this.dataService.blogs; 
  // }

  public allBlogs$!: Observable<BlogEntry[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.allBlogs$ = this.store.select(selectAllBlogs);
    this.store.dispatch(loadBlogs());
  }
}
