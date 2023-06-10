import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { PacienteLogin } from '../../interfaces/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Genero, Paciente } from 'src/app/users/interfaces/interfaces';

@Component( {
  selector: 'app-UP-login',
  templateUrl: './UP-login.component.html',
  styleUrls: [ './UP-login.component.css' ]
} )
export class UPLoginComponent implements OnInit
{
  public form = new FormGroup( {
    cuil: new FormControl<string>( '', [ Validators.required ] ),
    password_p: new FormControl<string>( '', [ Validators.required ] )
  } );

  paciente: Paciente = {
    cuil: '',
    password_p: '',
    genero_p: Genero.femenino,
    id: '',
    nombre_p: ''
  };

  constructor (

    private http: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,

  )

  { }


  get cuil ()
  {
    return this.form.get( "cuil" );
  }
  get password_p ()
  {
    return this.form.get( "password_p" );
  }

  get pacienteActual (): Paciente
  {
    const paciente = this.form.value as Paciente;
    return paciente;
  }

  onSubmit (): void
  {

    if ( !this.pacienteActual )
    {
      return;
    }

    if ( this.form.valid )
    {

      this.http.loginPaciente( this.pacienteActual.cuil, this.pacienteActual.password_p )
        .subscribe( paciente =>
        {
          // console.log( paciente );
          this.paciente = paciente as Paciente;
          this.router.navigate( [ 'users/home-up/up-perfil', this.paciente.id ] );
          // mensaje
          this.mostrarSnack( `Hola ${ this.paciente.nombre_p }, te damos la bienvenida a HCP` );

        }, error =>
        {
          this.mostrarSnack( 'Los datos ingresados no corresponden a un usuario registrado' );
        }

        );

      // console.log( {
      //   formIsValid: this.form.valid,
      //   valor: this.form.value
      // } );
    } else
    {
      this.mostrarSnack( `Los datos ingresados no son válidos` );
      throw Error( 'Los datos ingresados no son válidos' );
    }

  }

  mostrarSnack ( mensaje: string )
  {
    this.snackBar.open( mensaje, 'cerrar', {
      duration: 12500,
    } );
  }

  public registro ()
  {
    this.router.navigate( [ 'auth/registro-up' ] );
  }


  ngOnInit ()
  {

  }
}
