import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'originalDate'
})
export class OriginalDatePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    const originalDate = new Date(value);
   
    let months= ["January","February","March","April","May","June","July",
        "August","September","October","November","December"]
        return `${months[originalDate.getMonth()]} ${originalDate.getDate()}${this.nth(originalDate.getDate())}`;
    }

 nth(d: number) {
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}
}