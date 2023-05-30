import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from 'src/app/users/interfaces/interfaces';
import { UsersService } from 'src/app/users/service/users.service';

@Component({
  selector: 'app-UP-welcome',
  templateUrl: './UP-welcome.component.html',
  styleUrls: ['./UP-welcome.component.css']
})
export class UPWelcomeComponent implements OnInit {
  @Input() paciente!: Paciente;
  constructor(private homeService: UsersService) { }



  ngOnInit() {


    this.homeService.getPaciente()
      .subscribe((homePaciente: Paciente[]) => {
        this.paciente = homePaciente[4];

      });
  }

}
