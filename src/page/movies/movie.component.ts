import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {MovieCardComponent} from '../../components/movieCard/movie-card.component';
import {MovieServices} from '../../services/movie.services';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  imports: [
    NgForOf,
    MovieCardComponent,
    NgIf
  ],
  standalone: true
})

export class MovieComponent implements OnInit {


  constructor(private movieServices: MovieServices) {}

  // Array to hold banner images
  banners: string[] = [
    'assets/baner-1.jpg',
    'assets/baner-2.jpg',
    'assets/baner-3.jpg',
  ];

  // Array to hold now playing movies
  movies: any[] = [];

  // Index to track the current banner being displayed
  currentBannerIndex = 0;

  // Function to fetch all now playing movies
  getAllNowPlayingMovies() {
    this.movieServices.getAllNowPlayingMovies().subscribe((res:any) => {
      console.log(res);
      this.movies = res.results.map((movie: any) => ({
        title: movie.title,
        year: movie.release_date.split('-')[0],
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        rating: movie.vote_average,
        adult: movie.adult,
      }));
    });
  }

  ngOnInit(): void {

    // Fetch all now playing movies when the component initializes
    this.getAllNowPlayingMovies();

    // Start the banner rotation
    setInterval(() => {
      this.currentBannerIndex = (this.currentBannerIndex + 1) % this.banners.length;
    }, 3000); // Change every 3 seconds
  }

}
