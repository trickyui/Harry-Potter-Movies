import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(movies: Movie[], title: string, year: number): Movie[] {
    if(!movies) return [];
    if(!title && !year) return movies;

    if(title) {
      title = title.toLocaleLowerCase()
      movies = movies.filter(movie => movie.title.toLocaleLowerCase().includes(title))
    } 
    if(year) {
      movies = movies.filter(movie => movie.release_date.includes(year.toString()))
    }
    return movies;
  }

}
