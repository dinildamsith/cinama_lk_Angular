// tvShows-card.component.ts
import { Component, Input } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  standalone: true,
  imports: [],
})
export class PeopleCardComponent {
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() id: number = 0;
  @Input() title: string = '';
}
