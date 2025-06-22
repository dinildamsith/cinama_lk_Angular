import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  private createHeaders(auth: boolean = false): HttpHeaders {
    let headers = new HttpHeaders();
    if (auth) {
      const token = environment.tmdbToken;
      console.log('Token:', token);
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }
    }
    return headers;
  }

  get<T>(endpoint: string, auth: boolean = false): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, {
      headers: this.createHeaders(auth),
    });
  }

  post<T>(endpoint: string, data: any, auth: boolean = false): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, data, {
      headers: this.createHeaders(auth),
    });
  }

  put<T>(endpoint: string, data: any, auth: boolean = false): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, data, {
      headers: this.createHeaders(auth),
    });
  }

  delete<T>(endpoint: string, auth: boolean = false): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, {
      headers: this.createHeaders(auth),
    });
  }
}
