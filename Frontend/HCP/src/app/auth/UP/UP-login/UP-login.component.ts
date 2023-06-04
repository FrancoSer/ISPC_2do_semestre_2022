import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../auth.service';

import { PacienteLogin } from '../../interfaces/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-UP-login',
  templateUrl: './UP-login.component.html',
  styleUrls: ['./UP-login.component.css']
})
export class UPLoginComponent implements OnInit {

 

  public form = new FormGroup({
    username: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required])
  })

  paciente: PacienteLogin = {
    username: '',
    email: '',
    password: ''
  }

  constructor(

    private http: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,

    ) 
    
    {}


  get username() { 
    return this.form.get("username"); 
  }
  get email(){
    return this.form.get('email');
  }
  get password() { 
    return this.form.get("password"); 
  }

get pacienteActual(): PacienteLogin{
  const paciente = this.form.value as PacienteLogin;
  return paciente
}

  onSubmit(): void{

    if(!this.pacienteActual){
      return;
    }

    if(this.form.valid){

      this.http.loginPaciente( this.pacienteActual.email, this.pacienteActual.password)
        .subscribe (resp => {
        this.router.navigate(['users/home-up/up-perfil/']);
        // mensaje
        this.mostrarSnack(`Hola ${this.pacienteActual.username}, te damos nuevamente la bienvenida a HCP`)
  
      });
      console.log(this.pacienteActual)
      console.log({
        formIsValid: this.form.valid,
          valor: this.form.value
        });
      } else{
        this.mostrarSnack(`${this.pacienteActual.username} Los datos ingresados no son válidos`)
        throw Error('Los datos ingresados no son válidos')
      }

  }

  mostrarSnack( mensaje: string ){
    this.snackBar.open( mensaje, 'cerrar',{
      duration: 2500,
    });
}

public registro() {
  this.router.navigate(['auth/registro-up']);
}


ngOnInit() {
  
}
}
