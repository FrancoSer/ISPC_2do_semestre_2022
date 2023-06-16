import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente, Premium } from '../../interfaces/interfaces';
import { environment } from '../../../../environment/envaironment';

@Injectable( {
  providedIn: 'root'
} )
export class PremiumService
{

  baseUrl = environment.baseUrl;

  constructor (

    private http: HttpClient

  ) { }

  premium ( premium: {} )
  {
    return this.http.patch<Paciente>( `${ this.baseUrl }/api/paciente/${ localStorage.getItem( 'token' ) }/`, premium );
  }

  factura ( factura: {} )
  {

    return this.http.post( `${ this.baseUrl }/api/factura/`, factura );

  }


}
