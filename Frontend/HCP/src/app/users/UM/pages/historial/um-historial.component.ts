import { Component, Input } from '@angular/core';
import { Routes } from '@angular/router';
import { HistoriaClinica, Paciente } from 'src/app/users/interfaces/interfaces';
import { UsersService } from 'src/app/users/service/users.service';

@Component( {
  selector: 'app-um-historial',
  templateUrl: './um-historial.component.html',
  styleUrls: [ './um-historial.component.css' ]
} )
export class UMHistorialComponent
{

  public pacientes: Paciente[] = [];

  public pacienteSeleccionado!: Paciente;

  public historiaClinica: HistoriaClinica | undefined;

  constructor (
    private pacienteService: UsersService,

  ) { }

  ngOnInit ()
  {
    this.pacienteService.getPacientes()
      .subscribe( pacientes =>
      {

        this.pacientes = pacientes;
        this.historiaClinica = this.pacienteSeleccionado.historia_clinica;
      } );
  }


}
