import { Component, OnInit, Input } from '@angular/core';
import { Paciente } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-UM-perfil',
  templateUrl: './UM-perfil.component.html',

})


export class UMPerfilComponent implements OnInit {

  @Input() paciente!: Paciente;

  constructor() { }

  ngOnInit() {
  }
  
}
