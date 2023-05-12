import { Component, OnInit, Input } from '@angular/core';
import { Paciente } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-UM-perfil',
  templateUrl: './um-perfil.component.html',
  styleUrls: ['./um-perfil.component.css']
})


export class UMPerfilComponent implements OnInit {

  @Input() paciente!: Paciente;

  constructor() { }

  ngOnInit() {
  }
  
}
