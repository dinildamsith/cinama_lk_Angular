import {Component, OnInit} from '@angular/core';
import {MovieServices} from '../../services/movie.services';
import {ActivatedRoute, NavigationEnd} from '@angular/router';
import {DatePipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {filter} from 'rxjs';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgClass,
    DatePipe
  ],
})

export class MovieDetailsComponent implements OnInit{


  constructor(private movieService: MovieServices, private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  loading: boolean = false;
  isTrailerOpen = false;
  selectedTab: string = 'tab1'; // Default selected tab
  safeTrailerUrl!: SafeResourceUrl;

  movieDetails: any = {}
  movieCredits: any = {}
  movieVideos: any = {}
  movieTrailer: any = {}
  movieImages: any = {}



  //------------selected movie get by id
  selectedMovieGet(movieId: any){
    this.loading = true

    this.movieService.getSelectedMovieGet(movieId).subscribe({
      next : (res : any) => {
        console.log(res)
        this.movieDetails = res
        this.loading = false
      }, error: (err: any) => {
        console.log(err)
        this.loading = false
      }
    })
  }

  //------------selected movie credits get by id
  selectedMovieCreditsGet(movieId: any){
    this.loading = true

    this.movieService.getSelectedMovieCreditsGet(movieId).subscribe({
      next : (res : any) => {
        console.log(res)
        this.movieCredits = res
        this.loading = false
      }, error: (err: any) => {
        console.log(err)
        this.loading = false
      }
    })
  }

  //------------selected movie videos get by id
  selectedMovieVideosGet(movieId: any){
    this.loading = true

    this.movieService.getMovieVideos(movieId).subscribe({
      next : (res : any) => {
        this.movieVideos = res
        console.log(res)

        //-------------get the official trailer
        this.movieTrailer = res.results.find(
          (video: any) => video.type === 'Trailer' && video.name === 'Official Trailer' || 'Trailer'
        );
        console.log(this.movieTrailer);

        if (this.movieTrailer) {
          const url = `https://www.youtube.com/embed/${this.movieTrailer.key}`;
          this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }

        console.log(this.movieTrailer)
        this.loading = false
      }, error: (err: any) => {
        console.log(err)
        this.loading = false
      }
    })
  }

  //------------selected movie images get by id
  selectedMovieImagesGet(movieId: any){
    this.loading = true

    this.movieService.getMovieImages(movieId).subscribe({
      next : (res : any) => {
        console.log(res)
        this.movieImages = res
        this.loading = false
      }, error: (err: any) => {
        console.log(err)
        this.loading = false
      }
    })
  }

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('movieId');
    console.log(movieId)
    this.selectedMovieGet(movieId) //------------get selected movie by id
    this.selectedMovieCreditsGet(movieId) //------------get selected movie credits by id
    this.selectedMovieVideosGet(movieId) //------------get selected movie videos by id
    this.selectedMovieImagesGet(movieId) //------------get selected movie images by id
  }

  //------------open trailer
  openTrailer() {
    this.isTrailerOpen = true;
  }

  //------------close trailer
  closeTrailer() {
    this.isTrailerOpen = false;
  }

  //------------selected tab
  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  protected readonly console = console;
}
