import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calificacion'
})
export class CalificacionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]) {
    if(value){
      return "APROBADO"
    }else{
      return "REPROBADO"
    }
  }

}
