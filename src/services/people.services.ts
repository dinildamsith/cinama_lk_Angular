import {HttpService} from './http.service';
import { Injectable } from '@angular/core';
import {POPULAR_PEOPLE_GET_URL} from './endpoint.list';

@Injectable({
  providedIn: 'root'
})
export class PeopleServices {

  constructor(private httpServices: HttpService) {}

  getPopularPeople(pageCount:number) {
    return this.httpServices.get(POPULAR_PEOPLE_GET_URL + pageCount, true);
  }

}
