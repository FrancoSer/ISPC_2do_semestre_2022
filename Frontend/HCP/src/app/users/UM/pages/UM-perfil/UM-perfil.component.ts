import { Component, OnInit, } from '@angular/core';
import { Medico, } from '../../../interfaces/interfaces';
import { AuthUmService } from 'src/app/auth/auth-um.service';

@Component( {
  selector: 'app-UM-perfil',
  templateUrl: './UM-perfil.component.html',

} )


export class UMPerfilComponent implements OnInit
{

  public medico?: Medico;

  constructor (
    private http: AuthUmService
  ) { }

  ngOnInit (): void
  {
    this.medico = this.http.getMedicoActual();
  }



}
