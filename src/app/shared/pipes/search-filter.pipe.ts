import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(movies: Movie[], title: string, year: string): Movie[] {
    if(!title && !year) return movies;
    if(title) {
      movies = movies.filter(movie => movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()))
    } 
    if(year) {
      movies = movies.filter(movie => movie.release_date.includes(year))
    }
    return movies;
  }

}
