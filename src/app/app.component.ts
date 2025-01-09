import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppbarComponent } from './core/appbar/appbar.component';
import { HomeScreenComponent } from './core/home-screen/home-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppbarComponent, HomeScreenComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
