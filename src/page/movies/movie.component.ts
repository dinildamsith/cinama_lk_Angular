import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  imports: [
    NgOptimizedImage
  ],
  standalone: true
})

export class MovieComponent {

}
