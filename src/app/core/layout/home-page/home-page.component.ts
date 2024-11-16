import { Component, OnInit } from '@angular/core';
import { BlogcardComponent } from "../../widgets/blogcard/blogcard.component";
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { BlogEntry, DataService } from '../../../services/data-service/data.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BlogcardComponent, AsyncPipe, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  _blogs$: Observable<BlogEntry[]> | undefined; // Typ ist Observable

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this._blogs$ = this.dataService.blogs$; // Zuweisung des Observables
  }


}
