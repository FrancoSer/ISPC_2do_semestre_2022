import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PacienteRegistro } from 'src/app/auth/interfaces/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Genero, GrupoSanguineo, Paciente } from 'src/app/users/interfaces/interfaces';
import { AuthUpService } from '../../auth-up.service';

@Component( {
  selector: 'app-UP-registro',
  templateUrl: './UP-registro.component.html',
  styleUrls: [ './UP-registro.component.css' ]
} )
export class UPRegistroComponent implements OnInit
{


  minChars: number = 9;
  maxChars: number = 15;

  public pacienteForm = new FormGroup( {

    cuil: new FormControl<string>( '', [ Validators.required ] ),
    nacimiento_p: new FormControl<string>( '', [ Validators.required ] ),
    nombre_p: new FormControl<string>( '', [ Validators.required ] ),
    apellido_p: new FormControl<string>( '', [ Validators.required ] ),
    telefono_p: new FormControl<string>( '' ),
    direccion_p: new FormControl<string>( '' ),
    mail_p: new FormControl<string>( '', [ Validators.required, Validators.email ] ),
    genero_p: new FormControl<string>( '' ),
    sangre: new FormControl<string>( '', [ Validators.required ] ),
    password_p: new FormControl<string>( '', [ Validators.required, Validators.maxLength( this.maxChars ), Validators.minLength( this.minChars ) ] ),
    password_p_repeat: new FormControl<string>( '', [ Validators.required, Validators.maxLength( this.maxChars ), Validators.minLength( this.minChars ) ] ),

  } );

  genero = [
    {
      Fasculino: 'Masculino',
      Femenino: 'Femenino',
      Otro: 'Otro'
    }
  ];

  grupoSanguineo = [
    {
      Apositivo: 'A+',
      Anegativo: 'A-',
      Bpositivo: "B+",
      Bnegativo: "B-",
      CeroPositivo: "0+",
      CeroNegativo: "0-",
      ABpositivo: "AB+",
      ABnegativo: "AB-"
    }
  ];

  paciente: PacienteRegistro = {

    cuil: '',
    nacimiento_p: '',
    nombre_p: '',
    apellido_p: '',
    telefono_p: '',
    direccion_p: '',
    mail_p: '',
    genero_p: Genero.masculino,
    sangre: GrupoSanguineo.Apositivo,
    password_p: '',
    password_p_repeat: '',
    premium: false

  };

  constructor (

    private pacienteServicio: AuthUpService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog


  ) { }


  get nombre_p ()
  {
    return this.pacienteForm.get( "nombre_p" );
  }
  get apellido_p ()
  {
    return this.pacienteForm.get( "apellido_p" );
  }
  get mail_p ()
  {
    return this.pacienteForm.get( "mail_p" );
  }
  get cuil ()
  {
    return this.pacienteForm.get( "cuil" );
  }

  get password_p ()
  {
    return this.pacienteForm.get( 'password_p' );
  }
  get password_p_repeat ()
  {
    return this.pacienteForm.get( 'password_p_repeat' );
  }

  get nacimiento_p ()
  {
    return this.pacienteForm.get( 'nacimiento_p' );
  }

  get telefono_p ()
  {
    return this.pacienteForm.get( 'telefono_p' );
  }

  // PACIENTE ACTUAL

  get pacienteActual (): PacienteRegistro
  {

    const paciente = this.pacienteForm.value as PacienteRegistro;
    return paciente;

  }

  ngOnInit (): void
  {


  }


  onSubmit (): void
  {
    if ( !this.pacienteActual )
    {
      return;
    }

    if ( this.pacienteForm.valid )
    {

      this.pacienteServicio.registroPaciente( this.pacienteActual )
        .subscribe( paciente =>
        {
          this.router.navigate( [ 'auth/login-up' ] );
          // mensaje
          this.mostrarSnack( `${ this.pacienteActual.nombre_p } su perfil ha sido creado con éxito` );

        } );
      // console.log( this.pacienteActual );
      // console.log( {
      //   formIsValid: this.pacienteForm.valid,
      //   valor: this.pacienteForm.value
      // } );
    } else
    {
      console.log( this.pacienteActual );
      this.mostrarSnack( `${ this.pacienteActual.nombre_p } El formulario no es válido` );
      throw Error( 'El formulario no es válido' );
    }

  }



  mostrarSnack ( mensaje: string )
  {
    this.snackBar.open( mensaje, 'cerrar', {
      duration: 12500,
    } );
  }

}
