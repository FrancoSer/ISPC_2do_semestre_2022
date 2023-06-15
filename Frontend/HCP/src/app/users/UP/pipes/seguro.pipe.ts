import { Pipe, PipeTransform } from '@angular/core';
import { Genero } from '../../interfaces/interfaces';

@Pipe( {
  name: 'seguro'
} )
export class SeguroPipe implements PipeTransform
{


  transform ( valor: Genero ): string
  {

    if ( valor === 'Masculino' )
    {
      return 'seguro';
    }
    else if ( valor === 'Femenino' )
    {
      return 'segura';
    }
    else
    {
      return 'segure';
    }
  }

}
