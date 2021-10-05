import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(movies: any[], year1: any, year2: any): any[] {
    if (!movies || !year1 || !year2) {
      return movies;
    }
    return movies.filter(movie =>
      parseInt(movie.year) > parseInt(year1) && parseInt(movie.year) < parseInt(year2)
    )
  }
}
