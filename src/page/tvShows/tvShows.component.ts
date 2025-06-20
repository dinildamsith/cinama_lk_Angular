import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {TvShowsCardComponent} from '../../components/tvShowsCard/tvShows-card.component';
import {TvShowsService} from '../../services/tv-shows.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tvShows.component.html',
    imports: [
        NgForOf,
        TvShowsCardComponent,
        NgIf,
    ],
  standalone: true
})

export class TvShowsComponent implements OnInit {

  //------------service inject
  constructor(private tvShowsServices: TvShowsService) {}

  //----filter
  filter: any = {
    genre: '',
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

  filterExpanded = true;

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

  //------------get all popular tv shows
  getAllPopularTvShows() {
    this.loading = true;
    this.tvShowsServices.getPopularTvShows().subscribe({
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
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  //------------get all top rated tv shows
  getAllTopRatedTvShows() {
    this.loading = true;
    this.tvShowsServices.getTopRatedTvShows().subscribe({
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
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  //------------get all on the air tv shows
  getAllOnTheAirTvShows() {
    this.loading = true;
    this.tvShowsServices.getOnTheAirTvShows().subscribe({
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
        this.loading = false; // ✅ move here
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  //------------get all airing today tv shows
  getAllAiringTodayTvShows() {
    this.loading = true;
    this.tvShowsServices.getAiringTodayTvShows().subscribe({
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
    this.getAllPopularTvShows()
    setInterval(() => {
      this.currentBannerIndex = (this.currentBannerIndex + 1) % this.banners.length;
    }, 3000); // Change every 3 seconds
  }

  onCategoryChange(event: any) {
    const selectedCategory = event.target.value;

    if (selectedCategory === 'popular') {
      this.getAllPopularTvShows();
    } else if (selectedCategory === 'top_rated') {
      this.getAllTopRatedTvShows();
    } else if (selectedCategory === 'on_the_air') {
      this.getAllOnTheAirTvShows();
    } else if (selectedCategory === 'airing_today') {
      this.getAllAiringTodayTvShows();
    }

  }
}
