import { Component, OnInit } from '@angular/core';
import { BlogEntry, DataService } from './data.service';
import { Observable } from 'rxjs';
import { BlogcardComponent } from './blogcard/blogcard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BlogcardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'alains-blog';
  _blogs$: Observable<BlogEntry[]> | undefined; // Typ ist Observable

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this._blogs$ = this.dataService.blogs$; // Zuweisung des Observables
  }
}