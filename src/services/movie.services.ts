import {Injectable, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import {NOW_PLAYING_ALL_MOVIES_GET_URL} from './endpoint.list';

@Injectable({'providedIn': 'root'})
export class MovieServices{

  constructor(private httpServices: HttpService) {}

  getAllNowPlayingMovies(){
    return this.httpServices.get(NOW_PLAYING_ALL_MOVIES_GET_URL, true);
  }


}
