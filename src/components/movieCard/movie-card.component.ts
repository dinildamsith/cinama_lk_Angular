// movie-card.component.ts
import { Component, Input } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
})
export class MovieCardComponent {
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() rating: number = 0;
}
