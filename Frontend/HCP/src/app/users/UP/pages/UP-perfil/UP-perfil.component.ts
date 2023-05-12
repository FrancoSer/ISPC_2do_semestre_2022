import { Component, OnInit } from '@angular/core';
import { Paciente, HistoriaClinica } from 'src/app/users/interfaces/interfaces';
import { UsersService } from 'src/app/users/service/users.service';

@Component({
  selector: 'app-UP-perfil',
  templateUrl: './up-perfil.component.html',
  styleUrls: ['./up-perfil.component.css']
})
export class UPPerfilComponent implements OnInit {

  public pacientes: Paciente[] = [];

  public pacienteSeleccionado!: Paciente

  public historiaClinica: HistoriaClinica | undefined;

  constructor(private pacienteService: UsersService) {}

  ngOnInit() {
    this.pacienteService.getPaciente()
      .subscribe(pacientes => {
        this.pacientes = pacientes;
        this.pacienteSeleccionado = pacientes[1]
        this.historiaClinica = this.pacienteSeleccionado.historia_clinica
      });
  }


}
