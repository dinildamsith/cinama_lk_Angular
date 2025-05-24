import {HttpService} from './http.service';
import {Injectable} from '@angular/core';
import {
  AIRING_TODAY_ALL_TV_SHOWS_GET_URL,
  ON_THE_AIR_ALL_TV_SHOWS_GET_URL,
  POPULAR_ALL_TV_SHOWS_GET_URL, SELECTED_TV_SHOW_DETAILS_GET_URL,
  TOP_RATED_ALL_TV_SHOWS_GET_URL, TV_SERIES_CREDITS_GET_URL, TV_SERIES_IMAGES_GET_URL, TV_SERIES_VIDEOS_GET_URL
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

  getAiringTodayTvShows() {
    return this.httpServices.get(AIRING_TODAY_ALL_TV_SHOWS_GET_URL, true);
  }

  getTvShowDetails(id: number) {
    return this.httpServices.get(SELECTED_TV_SHOW_DETAILS_GET_URL + id, true);
  }

  getTvShowCredits(id: number) {
    return this.httpServices.get(TV_SERIES_CREDITS_GET_URL + id + '/credits', true);
  }

  getTvShowVideos(id: number) {
    return this.httpServices.get(TV_SERIES_VIDEOS_GET_URL + id + '/videos', true);
  }

  getTvShowImages(id: number) {
    return this.httpServices.get(TV_SERIES_IMAGES_GET_URL + id + '/images', true);
  }
}
