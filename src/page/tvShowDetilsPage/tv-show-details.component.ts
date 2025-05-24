import {Component, OnInit} from '@angular/core';
import {TvShowsService} from '../../services/tv-shows.service';
import {ActivatedRoute} from '@angular/router';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgClass
  ],
})

export class TvShowDetailsComponent implements OnInit{

  loading: boolean = false;
  selectedTab: string = 'tab1';
  isTrailerOpen = false;
  safeTrailerUrl!: SafeResourceUrl;
  tvSeriesDetails: any = {}
  tvShowTrailer: any = {};
  crew: any[] = [];
  cast: any[] = [];
  images: any = {};
  videos: any[] = [];

  constructor(private tvShowsService : TvShowsService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  //---------------selected tv show details get----------------
  getTvShowDetails(id: number) {
    this.loading = true;
    this.tvShowsService.getTvShowDetails(id).subscribe((response) => {
      this.tvSeriesDetails = response;
      console.log(this.tvSeriesDetails);
      this.loading = false;
    }, (error) => {
      console.error('Error fetching TV show details:', error);
      this.loading = false;
    });
  }

  //---------------selected tv show credits get----------------
  getTvShowCredits(id: number) {
    this.loading = true;
    this.tvShowsService.getTvShowCredits(id).subscribe((response:any) => {
      console.log('TV Show Credits Response:', response);
      this.crew = response?.crew;
      this.cast = response?.cast;
      console.log(this.crew, this.cast);
      this.loading = false;
    }, (error) => {
      console.error('Error fetching TV show credits:', error);
      this.loading = false;
    });
  }

  //---------------selected tv show videos get----------------
  getTvShowVideos(id: number) {
    this.loading = true;
    this.tvShowsService.getTvShowVideos(id).subscribe((response:any) => {
      console.log('TV Show Videos Response:', response);
      this.videos = response?.results;

      //-------------get the official trailer
      this.tvShowTrailer = response.results.find(
        (video: any) => video.type === 'Trailer' && video.name === 'Official Trailer' || 'Trailer'
      );

      if (this.tvShowTrailer) {
        const url = `https://www.youtube.com/embed/${this.tvShowTrailer.key}`;
        this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }

      console.log(this.tvShowTrailer);

      console.log(this.videos);
      this.loading = false;
    }, (error) => {
      console.error('Error fetching TV show videos:', error);
      this.loading = false;
    });
  }

  //---------------selected tv show images get----------------
  getTvShowImages(id: number) {
    this.loading = true;
    this.tvShowsService.getTvShowImages(id).subscribe((response:any) => {
      console.log('TV Show Images Response:', response);
      this.images = response
      console.log(this.images);
      this.loading = false;
    }, (error) => {
      console.error('Error fetching TV show images:', error);
      this.loading = false;
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('tvShowId');

    // Check if the id is not null or undefined
    if (id) {
      this.getTvShowDetails(+id);
      this.getTvShowCredits(+id);
      this.getTvShowVideos(+id);
      this.getTvShowImages(+id);
    } else {
      console.error('No TV show ID found in the route.');
    }
  }

  //------------selected tab
  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  //------------open trailer
  openTrailer() {
    this.isTrailerOpen = true;
  }

  //------------close trailer
  closeTrailer() {
    this.isTrailerOpen = false;
  }

}
