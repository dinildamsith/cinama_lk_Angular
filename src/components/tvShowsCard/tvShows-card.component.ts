// tvShows-card.component.ts
import { Component, Input } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-tv-shows-card',
  templateUrl: './tvShows-card.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
})
export class TvShowsCardComponent {
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() rating: number = 0;
}
