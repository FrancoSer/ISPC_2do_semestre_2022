import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Genero, GrupoSanguineo, Paciente, PacienteRegistro } from 'src/app/users/interfaces/interfaces';
import { UsersService } from 'src/app/users/service/users.service';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-UP-registro',
  templateUrl: './UP-registro.component.html',
  styleUrls: ['./UP-registro.component.css']
})
export class UPRegistroComponent implements OnInit {

  public pacienteForm = new FormGroup({

    username:       new FormControl<string>(''),
    // apellido:       new FormControl<string>(''),
    // cuil:           new FormControl<string>(''),
    email:           new FormControl<string>(''),
    password:       new FormControl<string>(''),
    // passwordRepet:  new FormControl<string>(''),
    // nacimiento:     new FormControl<string>(''),
    // genero:         new FormControl<Genero>(Genero.masculino),
    // grupoSanguineo: new FormControl<GrupoSanguineo>(GrupoSanguineo.Apositivo),
    
  });

  genero = [
    {
      masculino: 'Masculino',
      femenido:  'Femenino',
      x: 'X',
      otro: ''
    }
  ];

  grupoSanguineo = [
    {
      Apositivo: 'A+',
      Anegativo: 'A-',
      Bpositivo: "B+",
      Bnegativo: "B-", 
      CeroPositivo: "0+",
      CeroNegativo: "0-",
      ABpositivo: "AB+",
      ABnegativo: "AB-"
    }
  ];

  paciente: PacienteRegistro = {
    
    id: '',
    username: '',
    apellido: '',
    cuil: '',
    email: '',
    password: '',
    passwordRepeat: '',
    nacimiento: '',
    genero: Genero.masculino,
    grupoSanguineo: GrupoSanguineo.Apositivo,
    premium: false
   
  }

  constructor(

    private pacienteServicio: AuthService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog

    
  ) {}

  get pacienteActual(): Paciente{

    const paciente = this.pacienteForm.value as Paciente;
    return paciente

  }

  ngOnInit(): void {

    
  }


  onSubmit(): void{
    if(!this.pacienteActual){
      return;
    }

    this.pacienteServicio.registroPaciente(this.pacienteActual)
      .subscribe (paciente => {
      // this.router.navigate(['home-up/up-perfil/', paciente]);
      // mensaje
      this.mostrarSnack(`${this.paciente.username} su perfil ha sido creado`)

    });
    console.log(this.pacienteActual)
    console.log({
      formIsValid: this.pacienteForm.valid,
        valor: this.pacienteForm.value
      });
  }


  
  mostrarSnack( mensaje: string ){
    this.snackBar.open( mensaje, 'data',{
      duration: 2500,
    });
}

}
