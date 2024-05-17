import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../shared/services/movies.service';
import { MovieDetails } from '../../shared/interfaces/movie.interface';
import { TitleCasePipe } from '@angular/common';
import { TimeConverterPipe } from '../../shared/pipes/time-converter.pipe';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [TitleCasePipe, TimeConverterPipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  moviesService = inject(MoviesService);
  id!: string;
  data!: MovieDetails | null;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
    });
    if (this.id) {
      this.moviesService.getMovieDetails(this.id).subscribe(response => {
        this.data = response;
      })
    }
  }

  goBack(): void {
    this.router.navigate(['/movies'])
  }
}
