import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'app-appbar',
  templateUrl: 'appbar.component.html',
  styleUrl: 'appbar.component.scss',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, RouterOutlet],
})
export class AppbarComponent {

}
