import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'premium'
} )
export class PremiumPipe implements PipeTransform
{

  transform ( value: boolean | undefined ): string | undefined
  {

    if ( value === true )
    {
      return 'Usuario Premium';
    }
    return 'Cuenta gratuita';
  }

}
