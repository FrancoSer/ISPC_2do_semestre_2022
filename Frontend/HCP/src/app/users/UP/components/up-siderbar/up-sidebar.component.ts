import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Paciente } from 'src/app/users/interfaces/interfaces';
import { UsersService } from 'src/app/users/service/users.service';

@Component( {
  selector: 'app-up-sidebar',
  templateUrl: './up-sidebar.component.html',
  styleUrls: [ './up-sidebar.component.css' ]
} )
export class UPSidebarComponent implements OnInit
{
  @Input() sideNavStatus2: boolean = true;

  public pacientes?: Paciente[];

  constructor (
    private activeRoute: ActivatedRoute,
    private servicio: UsersService
  ) { }

  ngOnInit (): void
  {

    this.servicio.getPacientes()
      .subscribe( pacientes =>
      {

        this.pacientes = pacientes;

      } );

    // this.activeRoute.params
    //   .pipe(
    //     switchMap( ( { id } ) => this.servicio.getPacientePorId( id ) ),
    //   )
    //   .subscribe( params =>
    //   {
    //     console.log( params?.id );
    //   } );

  }


}
