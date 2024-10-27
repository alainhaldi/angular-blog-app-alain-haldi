import {ChangeDetectionStrategy, Component, Input, SimpleChanges} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { IconModel } from './icon.model';
import { BlogEntry } from '../data.service';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-blogcard',
  templateUrl: './blogcard.component.html',
  styleUrl: './blogcard.component.scss',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogcardComponent {
  @Input() blogEntry: BlogEntry | null = null; // Input property to receive blog data
  _icon: IconModel = new IconModel(false); // Initialize as null

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['blogEntry'] && this.blogEntry) {
      // Update _icon whenever blogEntry changes
      this._icon = new IconModel(this.blogEntry.likedByMe);
    }
  }
  toggleLike(){
    if(this._icon && this.blogEntry) {
      this._icon.toggleState();
      this.blogEntry.likes += 1;
    }
  }
}
