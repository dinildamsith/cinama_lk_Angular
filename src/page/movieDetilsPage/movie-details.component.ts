import {Component, OnInit} from '@angular/core';
import {MovieServices} from '../../services/movie.services';
import {ActivatedRoute, NavigationEnd} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {filter} from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
})

export class MovieDetailsComponent implements OnInit{


  constructor(private movieService: MovieServices, private route: ActivatedRoute) {}

  loading: boolean = false;
  movieDetails: any = {}
  movieCredits: any = {}


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


  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('movieId');
    console.log(movieId)
    this.selectedMovieGet(movieId)
    this.selectedMovieCreditsGet(movieId)
  }

}
