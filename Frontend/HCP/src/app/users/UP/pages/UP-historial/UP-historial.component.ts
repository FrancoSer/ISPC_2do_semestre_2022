import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Paciente } from 'src/app/users/interfaces/interfaces';
import { UsersService } from 'src/app/users/service/users.service';

@Component( {
  selector: 'app-UP-historial',
  templateUrl: './UP-historial.component.html',
  styleUrls: [ './UP-historial.component.css' ]
} )
export class UPHistorialComponent implements OnInit
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
        if ( !paciente ) return this.router.navigate( [ 'users/up-home/up-perfil/:id' ] );

        console.log( paciente );

        this.paciente = paciente;
        return;

      } );
  }


}
