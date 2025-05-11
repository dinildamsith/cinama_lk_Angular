import { Routes } from '@angular/router';
import {MovieComponent} from '../page/movies/movie.component';
import {TvShowsComponent} from '../page/tvShows/tvShows.component';

export const routes: Routes = [
  {path:'', component: MovieComponent},
  {path:'tv-shows', component: TvShowsComponent}
];
