import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Genero } from 'src/app/users/interfaces/interfaces';

@Component({
  selector: 'app-UP-registro',
  templateUrl: './UP-registro.component.html',
  styleUrls: ['./UP-registro.component.css']
})
export class UPRegistroComponent implements OnInit {

  public pacienteRegistro = new FormGroup({

    nombre:         new FormControl<string>(''),
    apellido:       new FormControl<string>(''),
    cuil:           new FormControl<string>(''),
    mail:           new FormControl<string>(''),
    password:       new FormControl<string>(''),
    passwordRepet:  new FormControl<string>(''),
    nacimiento:     new FormControl<string>(''),
    genero:         new FormControl<Genero>(Genero.masculino),
    grupoSanguineo: new FormControl<string>(''),
    
  });

  constructor() { }

  ngOnInit(): void {

    
  }

}
