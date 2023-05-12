import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'premium'
})
export class PremiumPipe implements PipeTransform {

  transform(value: boolean | undefined): string {

    if(value === true){
      return 'Usuario Premium'
    }
    return 'Cuenta gratuita'
  }

}
