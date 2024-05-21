import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(movies: Movie[], title: string, year: number): Movie[] {
    if (!movies) return [];
    if (!title && !year) return movies;

    if (title) {
      title = title.toLocaleLowerCase()
      movies = movies.filter(movie => movie.title.toLocaleLowerCase().includes(title))
    }

    const isYearSearched = year && (year.toString().length === 4);
    if (isYearSearched) {
      movies = movies.filter(movie => {
        const release_year = new Date(movie.release_date).getFullYear()
        return release_year === year;

      })
    }
    return movies;
  }

}
