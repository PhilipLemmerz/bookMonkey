import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplication'
})
export class MultiplicatePipe implements PipeTransform {

  transform(value: number, arg: number) {
    let result = value * arg
    return result
  }

}
