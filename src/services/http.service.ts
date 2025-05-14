import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  private createHeaders(auth: boolean = false): HttpHeaders {
    let headers = new HttpHeaders();
    if (auth) {
      const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjEzNmZkNjc2MTNlY2RiYjY4MDI2MzdmNjIzZWFmOCIsIm5iZiI6MTc0NjcyODQ2Ny4yNzgsInN1YiI6IjY4MWNmNjEzMzhkNTEyZWZhZGIxY2FhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OPQgXPjc5CbMOYxxfZ1aYimZCbGbfpwmavzep_tDvd0"
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
