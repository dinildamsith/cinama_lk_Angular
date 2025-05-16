import {Injectable, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import {
  NOW_PLAYING_ALL_MOVIES_GET_URL,
  POPULAR_ALL_MOVIES_GET_URL, SELECTED_MOVIE_DETAILS_GET_URL,
  TOP_RATED_ALL_MOVIES_GET_URL, UPCOMING_ALL_MOVIES_GET_URL
} from './endpoint.list';

@Injectable({'providedIn': 'root'})
export class MovieServices{

  constructor(private httpServices: HttpService) {}

  getPopularMovies(){
    return this.httpServices.get(POPULAR_ALL_MOVIES_GET_URL + 1, true);
  }

  getAllNowPlayingMovies(){
    return this.httpServices.get(NOW_PLAYING_ALL_MOVIES_GET_URL + 1, true);
  }

  getTopRatedMovies(){
    return this.httpServices.get(TOP_RATED_ALL_MOVIES_GET_URL + 1, true);
  }

  getUpcomingMovies(){
    return this.httpServices.get(UPCOMING_ALL_MOVIES_GET_URL + 1, true);
  }



  getSelectedMovieGet(movieId:any) {
    return this.httpServices.get(SELECTED_MOVIE_DETAILS_GET_URL + movieId + "?language=en-US", true)
  }


}
