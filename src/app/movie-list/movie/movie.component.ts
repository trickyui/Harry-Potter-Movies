import { Component, Input, OnChanges, OnInit, inject } from '@angular/core';
import { Movie } from '../../shared/interfaces/movie.interface';
import { Router } from '@angular/router';
import { MinutesToHoursPipe } from '../../shared/pipes/minutes-to-hours/minutes-to-hours.pipe';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [MinutesToHoursPipe],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent{
  router = inject(Router);

  @Input() movie!: Movie;

  openDetails(id: string):void {
    this.router.navigate(['/movies', id]);
  }
}
