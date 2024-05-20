import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours',
  standalone: true
})
export class MinutesToHoursPipe implements PipeTransform {

  transform(minutes: string): string {
    const duration = parseInt(minutes);
    if (isNaN(duration) || duration < 0) {
      return 'Invalid Input';
    }

    const hours = Math.floor(duration / 60);
    const remainingMinutes = duration % 60;

    if (hours === 0) {
      return remainingMinutes + 'min';
    } else if (remainingMinutes === 0) {
      return hours + 'h';
    } else {
      return `${hours}h ${remainingMinutes}min`;
    }
  }

}
