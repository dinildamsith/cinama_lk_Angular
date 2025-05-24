import {HttpService} from './http.service';
import {Injectable} from '@angular/core';
import {
  ON_THE_AIR_ALL_TV_SHOWS_GET_URL,
  POPULAR_ALL_TV_SHOWS_GET_URL,
  TOP_RATED_ALL_TV_SHOWS_GET_URL
} from './endpoint.list';

@Injectable({providedIn: 'root' })
export class TvShowsService {

  constructor(private httpServices: HttpService) {}

  getPopularTvShows(){
    return this.httpServices.get(POPULAR_ALL_TV_SHOWS_GET_URL, true);
  }

  getTopRatedTvShows(){
    return this.httpServices.get(TOP_RATED_ALL_TV_SHOWS_GET_URL, true);
  }

  getOnTheAirTvShows(){
    return this.httpServices.get(ON_THE_AIR_ALL_TV_SHOWS_GET_URL, true);
  }
}
