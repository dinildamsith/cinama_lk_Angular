import {Component, NgModule, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CommonModule, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {MovieCardComponent} from '../../components/movieCard/movie-card.component';
import {MovieServices} from '../../services/movie.services';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  imports: [
    NgForOf,
    MovieCardComponent,
    NgIf,
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

  movieCategories = [
    { key: 'popular', label: 'Popular' },
    { key: 'now_playing', label: 'Now Playing' },
    { key: 'upcoming', label: 'Upcoming' },
    { key: 'top_rated', label: 'Top Rated' }
  ];

  loading: boolean = false;
  // Array to hold now playing movies
  movies: any[] = [];

  // Index to track the current banner being displayed
  currentBannerIndex = 0;

  // Function to fetch all now playing movies
  getAllNowPlayingMovies() {
    this.loading = true;

    this.movieServices.getAllNowPlayingMovies().subscribe({
      next: (res: any) => {
        console.log(res);
        this.movies = res.results.map((movie: any) => ({
          title: movie.title,
          year: movie.release_date.split('-')[0],
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          rating: movie.vote_average,
          adult: movie.adult,
        }));
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error('Error fetching now playing movies:', err);
        this.loading = false; // ✅ also handle failure
      }
    });
  }

  // Function to fetch popular movies
  getPopularMovies() {
    this.loading = true;

    this.movieServices.getPopularMovies().subscribe({
      next: (res: any) => {
        console.log(res);
        this.movies = res.results.map((movie: any) => ({
          title: movie.title,
          year: movie.release_date.split('-')[0],
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          rating: movie.vote_average,
          adult: movie.adult,
        }));
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error('Error fetching popular movies:', err);
        this.loading = false; // ✅ also handle failure
      }
    });
  }

  // Function to fetch top rated movies
  getTopRatedMovies() {
    this.loading = true;

    this.movieServices.getTopRatedMovies().subscribe({
      next: (res: any) => {
        console.log(res);
        this.movies = res.results.map((movie: any) => ({
          title: movie.title,
          year: movie.release_date.split('-')[0],
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          rating: movie.vote_average,
          adult: movie.adult,
        }));
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error('Error fetching top rated movies:', err);
        this.loading = false; // ✅ also handle failure
      }
    });
  }

  // Function to fetch upcoming movies
  getUpcomingMovies() {
    this.loading = true;

    this.movieServices.getUpcomingMovies().subscribe({
      next: (res: any) => {
        console.log(res);
        this.movies = res.results.map((movie: any) => ({
          title: movie.title,
          year: movie.release_date.split('-')[0],
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          rating: movie.vote_average,
          adult: movie.adult,
        }));
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error('Error fetching upcoming movies:', err);
        this.loading = false; // ✅ also handle failure
      }
    });
  }

  ngOnInit(): void {

    // Fetch all now playing movies when the component initializes
    this.getPopularMovies()

    // Start the banner rotation
    setInterval(() => {
      this.currentBannerIndex = (this.currentBannerIndex + 1) % this.banners.length;
    }, 3000); // Change every 3 seconds
  }


  selectedCategory: string = ''
  onCategoryChange(event: any) {
    // Get the selected category from the event
    this.selectedCategory = event.target.value;

    console.log('Selected category:', this.selectedCategory);

    if (this.selectedCategory === 'popular') {
      this.getPopularMovies();
    }

    if (this.selectedCategory === 'now_playing') {
      this.getAllNowPlayingMovies();
    }

    if (this.selectedCategory === 'top_rated') {
      this.getTopRatedMovies();
    }

    if (this.selectedCategory === 'upcoming') {
      this.getUpcomingMovies();
    }

  }


}
