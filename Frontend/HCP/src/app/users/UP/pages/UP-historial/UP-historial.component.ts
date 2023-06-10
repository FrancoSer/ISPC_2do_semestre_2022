import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from 'src/app/users/interfaces/interfaces';
import { UsersService } from 'src/app/users/service/users.service';

@Component( {
  selector: 'app-UP-historial',
  templateUrl: './UP-historial.component.html',
  styleUrls: [ './UP-historial.component.css' ]
} )
export class UPHistorialComponent implements OnInit
{

  constructor ( private servicio: UsersService ) { }

  @Input() paciente?: Paciente;
  ngOnInit ()
  {



  }

}
