import { Component, OnInit } from '@angular/core';
import { AuthUpService } from 'src/app/auth/auth-up.service';
import { Paciente } from 'src/app/users/interfaces/interfaces';

@Component( {
  selector: 'app-plan-premium',
  templateUrl: './plan-premium.component.html',
  styleUrls: [ './plan-premium.component.css' ]
} )
export class PlanPremiumComponent implements OnInit
{

  public paciente?: Paciente;

  public pasarela: boolean = false;

  public gratis: boolean = false;

  public seisMeses: boolean = false;

  public anual: boolean = false;

  constructor (
    private http: AuthUpService
  ) { }

  abrirGratis ()
  {

    this.pasarela = !this.pasarela;
    this.gratis = !this.gratis;

  }

  abrirSeisMeses ()
  {

    this.pasarela = !this.pasarela;
    this.seisMeses = !this.seisMeses;

  }

  abrirAnual ()
  {

    this.pasarela = !this.pasarela;
    this.anual = !this.anual;

  }

  ngOnInit ()
  {

    this.paciente = this.http.getPacienteActual();

  }

}
