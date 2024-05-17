import { Component, Input, OnChanges, OnInit, inject } from '@angular/core';
import { Movie } from '../../shared/interfaces/movie.interface';
import { TimeConverterPipe } from '../../shared/pipes/time-converter.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [TimeConverterPipe],
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
