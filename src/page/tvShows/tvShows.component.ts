import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {TvShowsCardComponent} from '../../components/tvShowsCard/tvShows-card.component';
import {TvShowsService} from '../../services/tv-shows.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tvShows.component.html',
  imports: [
    NgForOf,
    TvShowsCardComponent,
    NgIf,
    FormsModule,
  ],
  standalone: true
})

export class TvShowsComponent implements OnInit {

  //------------service inject
  constructor(private tvShowsServices: TvShowsService) {}

  //----filter
  filter: any = {
    genre: '',
    adult: ''
  }

  //-------------states
  loading = false
  allTvSeries: any = [];

  allGenres: any = []

  banners: string[] = [
    'assets/baner-1.jpg',
    'assets/baner-2.jpg',
    'assets/baner-3.jpg',
  ];
  currentBannerIndex = 0;

  filterExpanded = false;

  currentPage = 1;
  totalPages = 1;


  toggleFilter() {
    this.filterExpanded = !this.filterExpanded;
  }

  setGenre(event: any) {
    this.filter.genre = event.target.value;
  }

  //------------get all genres
  getAllGenres() {
    this.loading = true;
    this.tvShowsServices.getTvSeriesGenres().subscribe({
      next: (res: any) => {
        console.log(res);
        this.allGenres = res.genres;
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  // Filter movies by type (adult or non-adult)
  chipStyle = 'px-3 py-1 rounded-full border border-gray-400 text-sm text-gray-700 dark:text-white';
  activeChipStyle = 'px-3 py-1 rounded-full bg-blue-600 text-white text-sm';
  selectedType: 'adult' | 'non-adult' | '' = '';
  filterByType(type: 'adult' | 'non-adult') {
    this.selectedType = type;
    this.filter.adult = type === 'adult' ? 'true' : 'false';
  }

  //----------tv show search
  searchTvShows() {
    this.loading = true;
    this.tvShowsServices.searchTvSeries(this.filter).subscribe({
      next: (res: any) => {
        console.log(res);
        this.allTvSeries = res.results.map((movie: any) => ({
          id: movie.id,
          title: movie.name,
          year: movie.first_air_date.split('-')[0],
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          rating: movie.vote_average,
          adult: movie.adult,
        }));
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  searchQuery = '';
  // key word through search
  searchTvShowsByKeyword() {
    this.loading = true;
    this.tvShowsServices.searchTvSeriesByKeyword(this.searchQuery).subscribe({
      next: (res: any) => {
        console.log(res);
        this.allTvSeries = res.results.map((movie: any) => ({
          id: movie.id,
          title: movie.name,
          year: movie.first_air_date.split('-')[0],
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          rating: movie.vote_average,
          adult: movie.adult,
        }));
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  //------------get all popular tv shows
  getAllPopularTvShows(pageCount: any) {
    this.loading = true;
    this.tvShowsServices.getPopularTvShows(pageCount).subscribe({
      next: (res: any) => {
        console.log(res);
        this.currentPage = pageCount;
        this.totalPages = res.total_pages;
        this.allTvSeries = res.results.map((movie: any) => ({
          id:movie.id,
          title: movie.name,
          year: movie.first_air_date.split('-')[0],
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          rating: movie.vote_average,
          adult: movie.adult,
        }));
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  //------------get all top rated tv shows
  getAllTopRatedTvShows(pageCount: any) {
    this.loading = true;
    this.tvShowsServices.getTopRatedTvShows(pageCount).subscribe({
      next: (res: any) => {
        console.log(res);
        this.allTvSeries = res.results.map((movie: any) => ({
          id:movie.id,
          title: movie.name,
          year: movie.first_air_date.split('-')[0],
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          rating: movie.vote_average,
          adult: movie.adult,
        }));
        this.currentPage = pageCount;
        this.totalPages = res.total_pages;
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  //------------get all on the air tv shows
  getAllOnTheAirTvShows(pageCount: any) {
    this.loading = true;
    this.tvShowsServices.getOnTheAirTvShows(pageCount).subscribe({
      next: (res: any) => {
        console.log(res);
        this.allTvSeries = res.results.map((movie: any) => ({
          id:movie.id,
          title: movie.name,
          year: movie.first_air_date.split('-')[0],
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          rating: movie.vote_average,
          adult: movie.adult,
        }));
        this.currentPage = pageCount;
        this.totalPages = res.total_pages;
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  //------------get all airing today tv shows
  getAllAiringTodayTvShows(pageCount: any) {
    this.loading = true;
    this.tvShowsServices.getAiringTodayTvShows(pageCount).subscribe({
      next: (res: any) => {
        console.log(res);
        this.allTvSeries = res.results.map((movie: any) => ({
          id:movie.id,
          title: movie.name,
          year: movie.first_air_date.split('-')[0],
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          rating: movie.vote_average,
          adult: movie.adult,
        }));
        this.currentPage = pageCount;
        this.totalPages = res.total_pages;
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  ngOnInit(): void {
    this.getAllGenres();
    this.getAllPopularTvShows(1)
    setInterval(() => {
      this.currentBannerIndex = (this.currentBannerIndex + 1) % this.banners.length;
    }, 3000); // Change every 3 seconds
  }

  onCategoryChange(event: any) {
    const selectedCategory = event.target.value;

    if (selectedCategory === 'popular') {
      this.getAllPopularTvShows(1);
    } else if (selectedCategory === 'top_rated') {
      this.getAllTopRatedTvShows(1);
    } else if (selectedCategory === 'on_the_air') {
      this.getAllOnTheAirTvShows(1);
    } else if (selectedCategory === 'airing_today') {
      this.getAllAiringTodayTvShows(1);
    }

  }


  // Pagination methods
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.getAllPopularTvShows(this.currentPage + 1);
      this.getAllTopRatedTvShows(this.currentPage + 1);
      this.getAllOnTheAirTvShows(this.currentPage + 1);
      this.getAllAiringTodayTvShows(this.currentPage + 1);
    }
  }


  prevPage() {
    if (this.currentPage > 1) {
      this.getAllPopularTvShows(this.currentPage - 1);
      this.getAllTopRatedTvShows(this.currentPage - 1);
      this.getAllOnTheAirTvShows(this.currentPage - 1);
      this.getAllAiringTodayTvShows(this.currentPage - 1);
    }
  }
}
