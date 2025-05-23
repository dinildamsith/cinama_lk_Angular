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
  ],
  standalone: true
})

export class TvShowsComponent implements OnInit {

  //------------service inject
  constructor(private tvShowsServices: TvShowsService) {}

  //-------------states
  loading = false
  allTvSeries: any = [];

  banners: string[] = [
    'assets/baner-1.jpg',
    'assets/baner-2.jpg',
    'assets/baner-3.jpg',
  ];
  currentBannerIndex = 0;

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

  ngOnInit(): void {
    this.getAllPopularTvShows()
    setInterval(() => {
      this.currentBannerIndex = (this.currentBannerIndex + 1) % this.banners.length;
    }, 3000); // Change every 3 seconds
  }

  onCategoryChange(event: any) {
    const selectedCategory = event.target.value;
    console.log('Selected category:', selectedCategory);
    // Perform any additional logic based on the selected category
  }
}
