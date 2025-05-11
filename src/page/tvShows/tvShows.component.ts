import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {MovieCardComponent} from '../../components/movieCard/movie-card.component';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tvShows.component.html',
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgIf,
    MovieCardComponent
  ],
  standalone: true
})

export class TvShowsComponent implements OnInit {

  banners: string[] = [
    'assets/baner-1.jpg',
    'assets/baner-2.jpg',
    'assets/baner-3.jpg',
  ];

  currentBannerIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentBannerIndex = (this.currentBannerIndex + 1) % this.banners.length;
    }, 3000); // Change every 3 seconds
  }

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
