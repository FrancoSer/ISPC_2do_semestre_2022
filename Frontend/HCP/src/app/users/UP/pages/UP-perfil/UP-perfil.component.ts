import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap, tap } from 'rxjs';
import { AuthUpService } from 'src/app/auth/auth-up.service';
import { Paciente, HistoriaClinica } from 'src/app/users/interfaces/interfaces';
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

  constructor (
    private http: AuthUpService,
    private activeRoute: ActivatedRoute,
    private router: Router ) { }

  abrirEditarUp ()
  {

    this.editar = true;

  }

  eliminarUp ()
  {

  }


  ngOnInit (): void
  {

    this.paciente = this.http.getPacienteActual();


    // this.activeRoute.params
    //   .pipe(

    //     switchMap( ( { id } ) => this.pacienteService.getPacientePorId( id ) ),

    //   )
    //   .subscribe( paciente =>
    //   {
    //     if ( !paciente ) return this.router.navigate( [ 'users/up-home/up-perfil/' ] );

    //     console.log( paciente );

    //     this.paciente = paciente;
    //     return;

    //   } );
  }


}
