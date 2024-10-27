import { Component, OnInit } from '@angular/core';
import { RouterModule} from '@angular/router';
import { BlogcardComponent } from "./blogcard/blogcard.component";
import { CommonModule } from '@angular/common';
import { BlogEntry, DataService } from './data.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, BlogcardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alains-blog';
  _items: BlogEntry[] = []; // Store fetched items here
  
  // Dependency injection: DataService
  constructor(private readonly dataService: DataService) {
    // Subscribe to the entries$ observable to receive data updates
    this.dataService.entries$.subscribe(entries => {
      this._items = entries; // Update _items with new data
    });
  }
  
}
