import { Component, Input } from '@angular/core';
import { HistoriaClinica, Paciente } from 'src/app/users/interfaces/interfaces';
import { UsersService } from 'src/app/users/service/users.service';

@Component({
  selector: 'app-um-historial',
  templateUrl: './UM-historial.component.html',
  styleUrls: ['./UM-historial.component.css']
})
export class UMHistorialComponent {

  public pacientes: Paciente[] = [];

  public pacienteSeleccionado!: Paciente

  public historiaClinica: HistoriaClinica | undefined;

  constructor(private pacienteService: UsersService) {}

  // ngOnInit() {
  //   this.pacienteService.getPaciente()
  //     .subscribe(pacientes => {
  //       this.pacientes = pacientes;
  //       this.pacienteSeleccionado = pacientes[0]
  //       this.historiaClinica = this.pacienteSeleccionado.historia_clinica
  //     });
  // }

}
