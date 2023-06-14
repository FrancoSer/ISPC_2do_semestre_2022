import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-plan-premium',
  templateUrl: './plan-premium.component.html',
  styleUrls: [ './plan-premium.component.css' ]
} )
export class PlanPremiumComponent implements OnInit
{

  public pasarela: boolean = false;

  constructor () { }

  abrirPasarela ()
  {

    this.pasarela = !this.pasarela;

  }

  ngOnInit ()
  {
  }

}
