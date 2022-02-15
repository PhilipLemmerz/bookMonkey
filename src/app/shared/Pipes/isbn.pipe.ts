import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isbn'
})
export class IsbnPipe implements PipeTransform {

  transform(value: string ): string | null {
    if(!value) {return null;}
    return `${value.substring(0,3)}-${value.substring(3,6)}-${value.substring(6,9)}-${value.substring(9,12)}-${value.substring(12)}`;
  }

}
