import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthUmService } from '../../auth-um.service';

import { MedicoLogin } from '../../interfaces/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Genero, Medico } from 'src/app/users/interfaces/interfaces';

@Component( {
  selector: 'app-UM-login',
  templateUrl: './UM-login.component.html',
  styleUrls: [ './UM-login.component.css' ]
} )
export class UMLoginComponent implements OnInit
{



  public form = new FormGroup( {
    matricula: new FormControl<string>( '', [ Validators.required ] ),
    password_m: new FormControl<string>( '', [ Validators.required ] )
  } );

  medico: Medico = {
    matricula: '',
    password_m: '',
    genero_m: Genero.femenino
  };

  constructor (

    private http: AuthUmService,
    private router: Router,
    private snackBar: MatSnackBar,

  )

  { }


  get matricula ()
  {
    return this.form.get( "matricula" );
  }
  get password_m ()
  {
    return this.form.get( "password_m" );
  }

  get medicoActual (): Medico
  {
    const medico = this.form.value as Medico;
    return medico;
  }

  onSubmit (): void
  {

    if ( !this.medicoActual )
    {
      return;
    }

    if ( this.form.valid )
    {

      this.http.loginMedico( this.medicoActual.matricula, this.medicoActual.password_m )
        .subscribe( resp =>
        {

          this.medico = resp as Medico;
          this.router.navigate( [ 'users/home-um/um-historial' ] );
          // mensaje
          this.mostrarSnack( `Hola ${ this.medico.nombre_m }, te damos nuevamente la bienvenida a HCP` );

        } );
      console.log( this.medicoActual );
      console.log( {
        formIsValid: this.form.valid,
        valor: this.form.value
      } );
    } else
    {
      this.mostrarSnack( `${ this.medicoActual.nombre_m } Los datos ingresados no son válidos` );
      throw Error( 'Los datos ingresados no son válidos' );
    }

  }

  mostrarSnack ( mensaje: string )
  {
    this.snackBar.open( mensaje, 'cerrar', {
      duration: 2500,
    } );
  }

  ngOnInit ()
  {

  }
}
