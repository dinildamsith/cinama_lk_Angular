import { Routes } from '@angular/router';
import {MovieComponent} from '../page/movies/movie.component';
import {TvShowsComponent} from '../page/tvShows/tvShows.component';
import {PeopleComponent} from '../page/people/people.component';
import {MovieDetailsComponent} from '../page/movieDetilsPage/movie-details.component';

export const routes: Routes = [
  {path:'', component: MovieComponent},
  {path:'tv-shows', component: TvShowsComponent},
  {path:'people', component: PeopleComponent},
  {path: 'movie-details', component: MovieDetailsComponent}
];
