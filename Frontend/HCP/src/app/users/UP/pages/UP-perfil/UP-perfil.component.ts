import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthUpService } from 'src/app/auth/auth-up.service';
import { PacienteRegistro } from 'src/app/auth/interfaces/auth';
import { Genero, Paciente } from 'src/app/users/interfaces/interfaces';
import { GrupoSanguineo } from '../../../interfaces/interfaces';
import { UsersService } from 'src/app/users/service/users.service';

@Component( {
  selector: 'app-UP-perfil',
  templateUrl: './UP-perfil.component.html',
  styleUrls: [ './UP-perfil.component.css' ]
} )
export class UPPerfilComponent implements OnInit
{

  public paciente?: Paciente;

  public editar = false;

  // form

  minChars: number = 9;
  maxChars: number = 15;

  public pacienteForm = new FormGroup( {
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

  pacienteEdit: any = {

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

  get pacienteActual (): PacienteRegistro
  {

    const paciente = this.pacienteForm.value as PacienteRegistro;
    return paciente;

  }

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


  constructor (
    private http: AuthUpService,
    private pacienteService: UsersService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  abrirEditarUp ()
  {

    this.editar = !this.editar;

  }

  eliminarUp ()
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

      this.pacienteService.editarPaciente( this.pacienteActual )
        .subscribe( paciente =>
        {
          this.mostrarSnack( `${ paciente.nombre_p } su perfil ha sido modificado` );

        } );
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


  ngOnInit (): void
  {

    this.paciente = this.http.getPacienteActual();

    // get de valores por defecto

    const nombre = this.paciente?.nombre_p;

    this.pacienteForm.patchValue( {
      nombre_p: nombre
    } );

    const apellido = this.paciente?.apellido_p;

    this.pacienteForm.patchValue( {
      apellido_p: apellido
    } );

    const telefono = this.paciente?.telefono_p;

    this.pacienteForm.patchValue( {
      telefono_p: telefono
    } );

    const direccion = this.paciente?.direccion_p;

    this.pacienteForm.patchValue( {
      direccion_p: direccion
    } );

    const email = this.paciente?.mail_p;

    this.pacienteForm.patchValue( {
      mail_p: email
    } );

    const grupoSanguineo = this.paciente?.sangre;

    this.pacienteForm.patchValue( {
      sangre: grupoSanguineo
    } );

    const genero = this.paciente?.genero_p;

    this.pacienteForm.patchValue( {
      genero_p: genero
    } );

    const nacimiento = this.paciente?.nacimiento_p;

    this.pacienteForm.patchValue( {
      nacimiento_p: nacimiento
    } );







  }


}
