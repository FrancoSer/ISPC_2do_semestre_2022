import { Component, Input } from '@angular/core';
import { Paciente } from 'src/app/users/interfaces/interfaces';
import { UsersService } from 'src/app/users/service/users.service';

@Component({
  selector: 'app-um-historial',
  templateUrl: './um-historial.component.html',
  styleUrls: ['./um-historial.component.css']
})
export class UMHistorialComponent {

  constructor( private servicio: UsersService){}

  paciente!: Paciente

  ngOnInit(): void {


     
    
  }

}
