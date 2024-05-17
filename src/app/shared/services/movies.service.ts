import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Movie, MovieDetails } from '../interfaces/movie.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  http = inject(HttpClient);

  constructor() { }

  getMoviesList(): Observable<Movie[]> {
    return this.http.get<Movie[]>('/movies');
  }

  getMovieDetails(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`/movies/${id}`);
  }
}
