import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {MovieCardComponent} from '../../components/movieCard/movie-card.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgIf,
    MovieCardComponent
  ],
  standalone: true
})

export class PeopleComponent{

  movies = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      image: 'https://i5.walmartimages.com/seo/Avengers-Infinity-War-Movie-Poster-Print-Regular-Style-Size-24-X-36_65e23347-2ccc-4581-9700-581e0ea9c3a8.a808f8889bfa9e368659fbefc5e5dda4.jpeg',
      rating: 9.3,
      adult: false,
    },
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      image: 'https://i5.walmartimages.com/seo/Avengers-Infinity-War-Movie-Poster-Print-Regular-Style-Size-24-X-36_65e23347-2ccc-4581-9700-581e0ea9c3a8.a808f8889bfa9e368659fbefc5e5dda4.jpeg',
      rating: 9.3,
      adult: false,
    }
    ,
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      image: 'https://i5.walmartimages.com/seo/Avengers-Infinity-War-Movie-Poster-Print-Regular-Style-Size-24-X-36_65e23347-2ccc-4581-9700-581e0ea9c3a8.a808f8889bfa9e368659fbefc5e5dda4.jpeg',
      rating: 1.3,
      adult: false,
    },
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      image: 'https://i5.walmartimages.com/seo/Avengers-Infinity-War-Movie-Poster-Print-Regular-Style-Size-24-X-36_65e23347-2ccc-4581-9700-581e0ea9c3a8.a808f8889bfa9e368659fbefc5e5dda4.jpeg',
      rating: 3.3,
      adult: false,
    },
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      image: 'https://i5.walmartimages.com/seo/Avengers-Infinity-War-Movie-Poster-Print-Regular-Style-Size-24-X-36_65e23347-2ccc-4581-9700-581e0ea9c3a8.a808f8889bfa9e368659fbefc5e5dda4.jpeg',
      rating: 10,
      adult: false,
    }
  ];

  constructor() {
  }

}
