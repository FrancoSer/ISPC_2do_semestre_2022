import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../../interfaces/interfaces';
import { UsersService } from 'src/app/users/service/users.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';

@Component( {
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: [ './buscar.component.css' ]
} )
export class BuscarComponent implements OnInit
{

  termino = new FormControl();

  pacientes: Paciente[] = [];

  pacienteSeleccionado!: Paciente | undefined;



  constructor (

    private pacienteService: UsersService

  ) { }

  // buscando ()
  // {
  //   if ( this.termino )
  //   {
  //     this.pacienteService.getBuscarPaciente( this.termino )
  //       .subscribe(
  //         pacientes =>
  //         {
  //           this.pacientes = pacientes;
  //         }
  //       );
  //   }
  // }


  opcionSeleccionada ( event: MatAutocompleteSelectedEvent )
  {


    if ( !event.option.value )
    {
      this.pacienteSeleccionado = undefined;
      return;
    }

    const paciente: Paciente = event.option.value;

    // this.termino = paciente.nombre_p;

    this.pacienteService.getPacientePorId( paciente.id! )
      .subscribe( paciente => this.pacienteSeleccionado = paciente );

  }

  ngOnInit ()
  {
  }

}
