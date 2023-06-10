import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MedicoRegistro } from 'src/app/auth/interfaces/auth';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Genero } from 'src/app/users/interfaces/interfaces';
import { validateBasis } from '@angular/flex-layout';

@Component( {
  selector: 'app-UM-registro',
  templateUrl: './UM-registro.component.html',
  styleUrls: [ './UM-registro.component.css' ]
} )


export class UMRegistroComponent implements OnInit
{

  minChars: number = 9;
  maxChars: number = 15;

  public medicoForm = new FormGroup( {

    matricula: new FormControl<string>( '', [ Validators.required, Validators.maxLength( 10 ) ] ),
    nacimiento_m: new FormControl<string>( '', [ Validators.required ] ),
    nombre_m: new FormControl<string>( '', [ Validators.required ] ),
    apellido_m: new FormControl<string>( '', [ Validators.required ] ),
    telefono_m: new FormControl<string>( '' ),
    direccion_m: new FormControl<string>( '' ),
    mail_m: new FormControl<string>( '', [ Validators.required, Validators.email ] ),
    genero_m: new FormControl<string>( '' ),
    password_m: new FormControl<string>( '', [ Validators.required, Validators.maxLength( this.maxChars ), Validators.minLength( this.minChars ) ] ),
    password_m_repeat: new FormControl<string>( '', [ Validators.required, Validators.maxLength( this.maxChars ), Validators.minLength( this.minChars ) ] ),

  } );

  medico: MedicoRegistro = {

    matricula: '',
    nacimiento_m: '',
    nombre_m: '',
    apellido_m: '',
    telefono_m: '',
    direccion_m: '',
    mail_m: '',
    genero_m: Genero.masculino,
    password_m: '',
    password_m_repeat: '',


  };

  constructor (

    private medicoServicio: AuthService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog


  ) { }

  get nombre_m ()
  {
    return this.medicoForm.get( "nombre_m" );
  }
  get apellido_m ()
  {
    return this.medicoForm.get( "apellido_m" );
  }
  get mail_m ()
  {
    return this.medicoForm.get( "mail_m" );
  }
  get matricula ()
  {
    return this.medicoForm.get( "matricula" );
  }

  get password_m ()
  {
    return this.medicoForm.get( 'password_m' );
  }
  get password_m_repeat ()
  {
    return this.medicoForm.get( 'password_m_repeat' );
  }

  get nacimiento_m ()
  {
    return this.medicoForm.get( 'nacimiento_m' );
  }

  get telefono_m ()
  {
    return this.medicoForm.get( 'telefono_m' );
  }


  // MEDICO ACTUAL

  get medicoActual (): MedicoRegistro
  {

    const medico = this.medicoForm.value as MedicoRegistro;
    return medico;

  }

  onSubmit (): void
  {
    if ( !this.medicoActual )
    {
      return;
    }

    if ( this.medicoForm.valid )
    {
      this.medicoServicio.registroMedico( this.medicoActual )
        .subscribe( medico =>
        {
          this.router.navigate( [ 'auth/login-um', medico ] );
          // mensaje
          this.mostrarSnack( `${ this.medicoActual.nombre_m } su perfil ha sido creado con éxito` );

        } );
      console.log( this.medicoActual );
      console.log( {
        formIsValid: this.medicoForm.valid,
        valor: this.medicoForm.value
      } );
    } else
    {
      this.mostrarSnack( `${ this.medicoActual.nombre_m } El formulario no es válido` );
      throw Error( 'El formulario no es válido' );
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
