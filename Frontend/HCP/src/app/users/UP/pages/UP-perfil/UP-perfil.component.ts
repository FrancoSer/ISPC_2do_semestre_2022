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

  public paciente!: Paciente;

  public pacientes!: Paciente[];

  public historiaClinica: HistoriaClinica | undefined;

  constructor (
    private pacienteService: UsersService,
    private activeRoute: ActivatedRoute,
    private route: Router ) { }

  // TODO


  ngOnInit ()
  {

    this.pacienteService.getPacientes()
      .pipe(
        tap( resp =>
        {
          console.log( resp );
        } )
      )
      .subscribe( p =>
      {
        this.pacientes = p;
      } );



    // me suscribo a los cambios que haya en la url de las rutas, recibo el 
    // parametro 
    // por desestructuracion tomo solo el id, es decir dejo solo
    // el valor

    // this.activeRoute.params
    // desestructuro el params
    // .pipe(
    //   switchMap( ( { id } ) => this.pacienteService.getPacientePorId( id ) ),
    //   tap( ( resp ) => console.log( resp ) )
    // )
    // .subscribe( paciente => this.paciente = paciente );
  }


}
