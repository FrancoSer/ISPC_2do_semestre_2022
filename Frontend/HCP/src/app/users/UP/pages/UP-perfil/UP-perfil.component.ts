import { Component, OnInit } from '@angular/core';
import { delay, tap } from 'rxjs';
import { Paciente, HistoriaClinica } from 'src/app/users/interfaces/interfaces';
import { UsersService } from 'src/app/users/service/users.service';

@Component( {
  selector: 'app-UP-perfil',
  templateUrl: './UP-perfil.component.html',
  styleUrls: [ './UP-perfil.component.css' ]
} )
export class UPPerfilComponent implements OnInit
{

  public pacientes: Paciente[] = [];

  public pacienteSeleccionado!: Paciente;

  public historiaClinica: HistoriaClinica | undefined;

  constructor ( private pacienteService: UsersService ) { }

  // TODO

  ngOnInit ()
  {
    // this.pacienteService.getPaciente()
    //   .pipe(
    //     delay(2000)
    //   )
    //   .subscribe(pacientes => {
    //     this.pacientes = pacientes;
    //     this.pacienteSeleccionado = pacientes[1];
    //     this.historiaClinica = this.pacienteSeleccionado.historia_clinica;
    //   });
  }


}
