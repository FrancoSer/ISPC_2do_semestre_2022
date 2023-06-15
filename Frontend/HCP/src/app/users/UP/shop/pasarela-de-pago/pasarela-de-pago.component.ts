import { Component, OnInit } from '@angular/core';
import { AuthUpService } from 'src/app/auth/auth-up.service';
import { Paciente } from 'src/app/users/interfaces/interfaces';
import { PremiumService } from '../premium.service';

@Component( {
  selector: 'app-pasarela-de-pago',
  templateUrl: './pasarela-de-pago.component.html',
  styleUrls: [ './pasarela-de-pago.component.css' ]
} )
export class PasarelaDePagoComponent implements OnInit
{

  public paciente?: Paciente;

  pacientePremium: any = {
    "premium": true
  };

  constructor (

    private http: AuthUpService,

    private servicePremium: PremiumService

  ) { }

  comprarServicio ()
  {
    this.servicePremium.premium( this.pacientePremium )
      .subscribe( resp => console.log( resp ) );
  }



  ngOnInit ()
  {

    this.paciente = this.http.getPacienteActual();

  }

}
