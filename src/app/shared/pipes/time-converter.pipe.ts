import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeConverter',
  standalone: true
})
export class TimeConverterPipe implements PipeTransform {

  transform(value: string | undefined): string | undefined {
    if(value) {
      const duration = Number(value);
      const hours = Math.floor(duration / 60);
      const minutes = duration % 60;
      return `${hours}h ${minutes}min`;
    }
    return value;
  }

}
