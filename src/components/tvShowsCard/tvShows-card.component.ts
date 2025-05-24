// tvShows-card.component.ts
import { Component, Input } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-tv-shows-card',
  templateUrl: './tvShows-card.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
})
export class TvShowsCardComponent {
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() rating: number = 0;
}
