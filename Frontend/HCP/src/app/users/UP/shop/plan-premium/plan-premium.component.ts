import { Component, OnInit } from '@angular/core';
import { AuthUpService } from 'src/app/auth/auth-up.service';
import { Paciente } from 'src/app/users/interfaces/interfaces';
import { PremiumService } from '../premium.service';
import { tap } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component( {
  selector: 'app-plan-premium',
  templateUrl: './plan-premium.component.html',
  styleUrls: [ './plan-premium.component.css' ]
} )
export class PlanPremiumComponent implements OnInit
{

  public paciente?: Paciente;

  public pasarelaGratis: boolean = false;

  public pasarelaSemestral: boolean = false;

  public pasarelaAnual: boolean = false;

  public agradecimiento: boolean = false;


  public form = new FormGroup( {

    numero: new FormControl<string>( '', [ Validators.required, Validators.maxLength( 16 ) ] ),
    vencimiento: new FormControl<string>( '', [ Validators.required, Validators.maxLength( 5 ) ] ),
    codigo: new FormControl<string>( '', [ Validators.required, Validators.maxLength( 3 ) ] ),
    nombre: new FormControl<string>( '', [ Validators.required ] )


  } );

  facturaGratis: {} = {

    "total": "0",
    "extras": "0",
    "id_paciente": localStorage.getItem( 'token' ),
    "id_servicio": "1"

  };

  facturaSemestral: {} = {

    "total": "2000",
    "extras": "0",
    "id_paciente": localStorage.getItem( 'token' ),
    "id_servicio": "2"

  };

  facturaAnual: {} = {

    "total": "3000",
    "extras": "0",
    "id_paciente": localStorage.getItem( 'token' ),
    "id_servicio": "3"

  };

  pacientePremium: {} = {
    "premium": true
  };


  constructor (
    private http: AuthUpService,
    private servicePremium: PremiumService


  ) { }

  abrirGratis ()
  {

    this.pasarelaGratis = !this.pasarelaGratis;


  }

  abrirSemestral ()
  {

    this.pasarelaSemestral = !this.pasarelaSemestral;


  }

  abrirAnual ()
  {

    this.pasarelaAnual = !this.pasarelaAnual;


  }

  gratis ()
  {

    this.servicePremium.factura( this.facturaGratis )
      .subscribe(
        resp => console.log( resp )
      );

    this.servicePremium.premium( this.pacientePremium )
      .pipe(
        tap( resp => this.agradecimiento = true ),
        tap( resp => this.pasarelaGratis = false ),
        tap( resp => location.reload() ),
      )
      .subscribe(
        resp => console.log( resp ),

      );

  }

  semestral ()
  {

    this.servicePremium.factura( this.facturaSemestral )
      .subscribe(
        resp => console.log( resp )
      );

    this.servicePremium.premium( this.pacientePremium )
      .pipe(
        tap( resp => this.agradecimiento = true ),
        tap( resp => this.pasarelaGratis = false ),
        tap( resp => location.reload() ),
      )
      .subscribe(
        resp => console.log( resp ),

      );

  }

  anual ()
  {

    this.servicePremium.factura( this.facturaAnual )
      .subscribe(
        resp => console.log( resp )
      );

    this.servicePremium.premium( this.pacientePremium )
      .pipe(
        tap( resp => this.agradecimiento = true ),
        tap( resp => this.pasarelaGratis = false ),
        tap( resp => location.reload() ),
      )
      .subscribe(
        resp => console.log( resp ),

      );

  }


  ngOnInit ()
  {

    this.paciente = this.http.getPacienteActual();

  }

}
