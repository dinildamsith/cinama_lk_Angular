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
    FormsModule,
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

  // Array to hold movie categories
  movieCategories = [
    { key: 'popular', label: 'Popular' },
    { key: 'now_playing', label: 'Now Playing' },
    { key: 'upcoming', label: 'Upcoming' },
    { key: 'top_rated', label: 'Top Rated' }
  ];

  // Array to hold all movie genres
  allGenres: any[] = [];

  // search body
  filter : any = {
    genre: '',
  }

  loading: boolean = false;
  movies: any[] = [];
  selectedCategory: string = ''

  // Index to track the current banner being displayed
  currentBannerIndex = 0;

  filterExpanded = false;

  currentPage = 1;
  totalPages = 1;

  toggleFilter() {
    this.filterExpanded = !this.filterExpanded;
  }


  // Movie Genres get
  getMovieGenres() {
    this.loading = true;

    this.movieServices.getMovieGenres().subscribe({
      next: (res: any) => {
        console.log(res);
        this.allGenres = res.genres;
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error('Error fetching movie genres:', err);
        this.loading = false; // ✅ also handle failure
      }
    });
  }

  // Function to fetch all now playing movies
  getAllNowPlayingMovies(pageCount: number = 1) {
    this.loading = true;

    this.movieServices.getAllNowPlayingMovies(pageCount).subscribe({
      next: (res: any) => {
        console.log(res);
        this.movies = res.results.map((movie: any) => ({
          id:movie.id,
          title: movie.title,
          year: movie.release_date.split('-')[0],
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          rating: movie.vote_average,
          adult: movie.adult,
        }));
        this.currentPage = pageCount;
        this.totalPages = res.total_pages;
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error('Error fetching now playing movies:', err);
        this.loading = false; // ✅ also handle failure
      }
    });
  }

  // Function to fetch popular movies
  getPopularMovies(pageCount: any) {
    this.loading = true;

    this.movieServices.getPopularMovies(pageCount).subscribe({
      next: (res: any) => {
        console.log(res);
        this.movies = res.results.map((movie: any) => ({
          id:movie.id,
          title: movie.title,
          year: movie.release_date.split('-')[0],
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          rating: movie.vote_average,
          adult: movie.adult,
        }));
        this.currentPage = pageCount;
        this.totalPages = res.total_pages;
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error('Error fetching popular movies:', err);
        this.loading = false; // ✅ also handle failure
      }
    });
  }

  // Function to fetch top rated movies
  getTopRatedMovies(pageCount: number ) {
    this.loading = true;

    this.movieServices.getTopRatedMovies(pageCount).subscribe({
      next: (res: any) => {
        console.log(res);
        this.movies = res.results.map((movie: any) => ({
          id:movie.id,
          title: movie.title,
          year: movie.release_date.split('-')[0],
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          rating: movie.vote_average,
          adult: movie.adult,
        }));
        this.currentPage = pageCount;
        this.totalPages = res.total_pages;
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error('Error fetching top rated movies:', err);
        this.loading = false; // ✅ also handle failure
      }
    });
  }

  // Function to fetch upcoming movies
  getUpcomingMovies(pageCount: number) {
    this.loading = true;

    this.movieServices.getUpcomingMovies(pageCount).subscribe({
      next: (res: any) => {
        console.log(res);
        this.movies = res.results.map((movie: any) => ({
          id:movie.id,
          title: movie.title,
          year: movie.release_date.split('-')[0],
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          rating: movie.vote_average,
          adult: movie.adult,
        }));
        this.currentPage = pageCount;
        this.totalPages = res.total_pages;
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error('Error fetching upcoming movies:', err);
        this.loading = false; // ✅ also handle failure
      }
    });
  }

  //----setter filter data
  setGenre(event: any) {
    this.filter.genre = event.target.value;
    console.log('Selected genre:', this.filter.genre);
  }

  // serch handel
  searchMovie() {
    this.loading = true;

    // Call the searchMovies method from the movieServices
    this.movieServices.searchMovies(this.filter).subscribe({
      next: (res: any) => {
        console.log(res);
        this.movies = res.results.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          year: movie.release_date.split('-')[0],
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          rating: movie.vote_average,
          adult: movie.adult,
        }));
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error('Error searching movies:', err);
        this.loading = false; // ✅ also handle failure
      }
    });
  }

  // keyword search
  searchQuery: string = '';
  searchMovieByKeyword(event:any) {
    this.loading = true;

    // Call the searchMoviesByKeyword method from the movieServices
    this.movieServices.searchMoviesByKeyword(this.searchQuery).subscribe({
      next: (res: any) => {
        console.log(res);
        this.movies = res.results.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          year: movie.release_date.split('-')[0],
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          rating: movie.vote_average,
          adult: movie.adult,
        }));
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error('Error searching movies by keyword:', err);
        this.loading = false; // ✅ also handle failure
      }
    });
  }

  ngOnInit(): void {

    // genres get
    this.getMovieGenres()

    // Fetch all now playing movies when the component initializes
    this.getPopularMovies(1)

    // Start the banner rotation
    setInterval(() => {
      this.currentBannerIndex = (this.currentBannerIndex + 1) % this.banners.length;
    }, 3000); // Change every 3 seconds
  }



  // Function to handle category change
  onCategoryChange(event: any) {
    // Get the selected category from the event
    this.selectedCategory = event.target.value;

    console.log('Selected category:', this.selectedCategory);

    // popular movies
    if (this.selectedCategory === 'popular') {
      this.getPopularMovies(1);
    }

    // Now playing movies
    if (this.selectedCategory === 'now_playing') {
      this.getAllNowPlayingMovies(1);
    }

    // Top rated movies
    if (this.selectedCategory === 'top_rated') {
      this.getTopRatedMovies(1);
    }

    // Upcoming movies
    if (this.selectedCategory === 'upcoming') {
      this.getUpcomingMovies(1);
    }

  }


  // Pagination methods
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.getPopularMovies(this.currentPage + 1);
      this.getAllNowPlayingMovies(this.currentPage + 1);
      this.getTopRatedMovies(this.currentPage + 1);
      this.getUpcomingMovies(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.getPopularMovies(this.currentPage + 1);
      this.getAllNowPlayingMovies(this.currentPage + 1);
      this.getTopRatedMovies(this.currentPage + 1);
      this.getUpcomingMovies(this.currentPage + 1);
    }
  }
}
