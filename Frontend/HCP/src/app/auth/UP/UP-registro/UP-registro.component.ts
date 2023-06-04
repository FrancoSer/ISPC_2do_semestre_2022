import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PacienteRegistro } from 'src/app/auth/interfaces/auth';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Genero, GrupoSanguineo, Paciente } from 'src/app/users/interfaces/interfaces';

@Component({
  selector: 'app-UP-registro',
  templateUrl: './UP-registro.component.html',
  styleUrls: ['./UP-registro.component.css']
})
export class UPRegistroComponent implements OnInit {

  
  minChars: number = 9;
  maxChars: number = 15;

  public pacienteForm = new FormGroup({


    // apellido:       new FormControl<string>(''),
    // cuil:           new FormControl<string>(''),
    // apellido:       new FormControl<string>(''),
    // cuil:           new FormControl<string>(''),
    email:             new FormControl<string>('', [Validators.required, Validators.email]),
    username:          new FormControl<string>('', [Validators.required]),
    password:          new FormControl<string>('', [Validators.required, Validators.maxLength(this.maxChars), Validators.minLength(this.minChars)]),
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

  
  get username() { 
    return this.pacienteForm.get("username"); 
  }
  get email() { 
    return this.pacienteForm.get("email"); 
  }

  get password(){
    return this.pacienteForm.get('password')
  }

  get pacienteActual(): PacienteRegistro{

    const paciente = this.pacienteForm.value as PacienteRegistro;
    return paciente

  }

  ngOnInit(): void {

    
  }


  onSubmit(): void{
    if(!this.pacienteActual){
      return;
    }

    if(this.pacienteForm.valid){

    this.pacienteServicio.registroPaciente(this.pacienteActual)
      .subscribe (() => {
      this.router.navigate(['users/home-up/up-perfil']);
      // mensaje
      this.mostrarSnack(`${this.pacienteActual.username} su perfil ha sido creado`)

    });
    console.log(this.pacienteActual)
    console.log({
      formIsValid: this.pacienteForm.valid,
        valor: this.pacienteForm.value
      });
    } else{
      this.mostrarSnack(`${this.pacienteActual.username} El formulario no es válido`)
      throw Error('El formulario no es válido')
    }
  
  }


  
  mostrarSnack( mensaje: string ){
    this.snackBar.open( mensaje, 'cerrar',{
      duration: 2500,
    });
}

}
