import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: 'movies', component: MovieListComponent },
    { path: 'movies/:id', loadComponent: () => import('./movie-list/movie-details/movie-details.component').then(m => m.MovieDetailsComponent) },
];
