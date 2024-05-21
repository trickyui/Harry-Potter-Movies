import { Component, Input, OnInit, inject } from '@angular/core';
import { MoviesService } from '../shared/services/movies.service';
import { Movie } from '../shared/interfaces/movie.interface';
import { MovieComponent } from './movie/movie.component';
import { SearchFilterPipe } from '../shared/pipes/search-filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieComponent, SearchFilterPipe, FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  moviesService = inject(MoviesService);
  
  movies: Movie[] = [];
  title: string = '';
  year!: number;

  ngOnInit(): void {
    this.moviesService.getMoviesList().subscribe((response: Movie[]) => {
      this.movies = response;
    });
  }
}
