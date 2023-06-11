import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthUpService } from 'src/app/auth/auth-up.service';
import { Paciente } from 'src/app/users/interfaces/interfaces';

@Component( {
  selector: 'app-UP-perfil',
  templateUrl: './UP-perfil.component.html',
  styleUrls: [ './UP-perfil.component.css' ]
} )
export class UPPerfilComponent implements OnInit
{

  public paciente?: Paciente;

  public editar = false;

  constructor (
    private http: AuthUpService
  ) { }

  abrirEditarUp ()
  {

    this.editar = true;

  }

  eliminarUp ()
  {

  }


  ngOnInit (): void
  {

    this.paciente = this.http.getPacienteActual();

  }


}
