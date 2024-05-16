import { Routes } from '@angular/router';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: 'movies', component: MoviesComponent },
    { path: 'movies/:id', loadComponent: () => import('./movies/movie-details/movie-details.component').then(m => m.MovieDetailsComponent) },
    { path: '**', loadComponent: () => import('./page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) }
];
