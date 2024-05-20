import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../shared/services/movies.service';
import { MovieDetails } from '../../shared/interfaces/movie.interface';
import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { MinutesToHoursPipe } from '../../shared/pipes/minutes-to-hours.pipe';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [TitleCasePipe, MinutesToHoursPipe, AsyncPipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  moviesService = inject(MoviesService);

  movieId!: string;
  movieDetails$!: Observable<MovieDetails>;

  ngOnInit(): void {
   this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.movieDetails$ = this.moviesService.getMovieDetails(this.movieId);
    });
  }

  goBack(): void {
    this.router.navigate(['/movies'])
  }
}
