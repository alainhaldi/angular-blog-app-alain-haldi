import { Component, OnInit } from '@angular/core';
import { BlogEntry, DataService } from './services/data-service/data.service';
import { Observable } from 'rxjs';
import { BlogcardComponent } from './core/widgets/blogcard/blogcard.component';
import { CommonModule } from '@angular/common';


import { RouterLink, RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./core/layout/home-page/home-page.component";
import { AppbarComponent } from "./core/widgets/appbar/appbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BlogcardComponent, RouterLink, RouterOutlet, HomePageComponent, AppbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}