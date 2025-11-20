import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(condition:boolean): string {
    if(condition) return "Puede volar";
    return "No puede volar";
  }

}
