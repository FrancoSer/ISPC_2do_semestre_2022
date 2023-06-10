import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap, tap } from 'rxjs';
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

  constructor (
    private pacienteService: UsersService,
    private activeRoute: ActivatedRoute,
    private router: Router ) { }

  ngOnInit (): void
  {
    this.activeRoute.params
      .pipe(

        switchMap( ( { id } ) => this.pacienteService.getPacientePorId( id ) ),

      )
      .subscribe( paciente =>
      {
        if ( !paciente ) return this.router.navigate( [ 'users/up-home/up-perfil/' ] );

        console.log( paciente );

        this.paciente = paciente;
        return;

      } );
  }


}
