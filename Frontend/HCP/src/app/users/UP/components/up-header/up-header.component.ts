import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthUpService } from 'src/app/auth/auth-up.service';
import { Paciente } from 'src/app/users/interfaces/interfaces';

@Component( {
  selector: 'app-up-header',
  templateUrl: './up-header.component.html',
  styleUrls: [ './up-header.component.css' ]
} )
export class UPHeaderComponent implements OnInit
{

  constructor (
    private http: AuthUpService
  ) { }

  // get paciente

  get paciente (): Paciente | undefined
  {
    return this.http.getPacienteActual();
  }

  logOutUp ()
  {

    this.http.logoutPaciente();

  }


  ngOnInit (): void
  {

  }
  @Output() sideNavToggled2 = new EventEmitter<boolean>();
  menuStatus2: boolean = true;
  SideNavToggle2 ()
  {
    this.menuStatus2 = !this.menuStatus2;
    this.sideNavToggled2.emit( this.menuStatus2 );
  }
}
