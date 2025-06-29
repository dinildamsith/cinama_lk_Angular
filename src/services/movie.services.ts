import {Injectable, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import {
  MOVIE_REVIEWS_GET_URL,
  MOVIES_GENRES_GET_URL, MOVIES_SEARCH_BY_KEYWORD_GET_URL, MOVIES_SEARCH_GET_URL,
  NOW_PLAYING_ALL_MOVIES_GET_URL,
  POPULAR_ALL_MOVIES_GET_URL,
  SELECTED_MOVIE_CREDITS_GET_URL,
  SELECTED_MOVIE_DETAILS_GET_URL, SELECTED_MOVIE_IMAGES_GET_URL,
  SELECTED_MOVIE_VIDEOS_GET_URL,
  TOP_RATED_ALL_MOVIES_GET_URL,
  UPCOMING_ALL_MOVIES_GET_URL
} from './endpoint.list';

@Injectable({'providedIn': 'root'})
export class MovieServices{

  constructor(private httpServices: HttpService) {}

  getPopularMovies(pageCount: number) {
    return this.httpServices.get(POPULAR_ALL_MOVIES_GET_URL + pageCount, true);
  }

  getAllNowPlayingMovies(pageCount: number) {
    return this.httpServices.get(NOW_PLAYING_ALL_MOVIES_GET_URL + pageCount, true);
  }

  getTopRatedMovies(pageCount: number) {
    return this.httpServices.get(TOP_RATED_ALL_MOVIES_GET_URL + pageCount, true);
  }

  getUpcomingMovies(pageCount: number) {
    return this.httpServices.get(UPCOMING_ALL_MOVIES_GET_URL + pageCount, true);
  }



  getSelectedMovieGet(movieId:any) {
    return this.httpServices.get(SELECTED_MOVIE_DETAILS_GET_URL + movieId + "?language=en-US", true)
  }

  getSelectedMovieCreditsGet(movieId:any) {
    return this.httpServices.get(SELECTED_MOVIE_CREDITS_GET_URL + movieId + "/credits?language=en-US", true)
  }

  getMovieVideos(movieId:any) {
    return this.httpServices.get(SELECTED_MOVIE_VIDEOS_GET_URL + movieId + "/videos?language=en-US", true)
  }

  getMovieImages(movieId:any) {
    return this.httpServices.get(SELECTED_MOVIE_IMAGES_GET_URL + movieId + "/images", true)
  }

  getMovieReviews(movieId:any) {
    return this.httpServices.get(MOVIE_REVIEWS_GET_URL + movieId + "/reviews?language=en-US&page=1", true)
  }

  getMovieGenres() {
    return this.httpServices.get(MOVIES_GENRES_GET_URL, true);
  }

  searchMovies(filter: any) {
    let url = MOVIES_SEARCH_GET_URL + `&with_genres=${filter.genre}&include_adult=${filter.adult}&sort_by=popularity.desc&page=1`;
    return this.httpServices.get(url, true);
  }

  searchMoviesByKeyword(keyword: string) {
    return this.httpServices.get(MOVIES_SEARCH_BY_KEYWORD_GET_URL + `&query=${keyword}&include_adult=true`, true);
  }

}
