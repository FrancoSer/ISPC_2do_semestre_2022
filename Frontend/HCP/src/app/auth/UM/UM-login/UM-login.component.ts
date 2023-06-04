import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../auth.service';

import { MedicoLogin } from '../../interfaces/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-UM-login',
  templateUrl: './UM-login.component.html',
  styleUrls: ['./UM-login.component.css']
})
export class UMLoginComponent implements OnInit {

 

  public form = new FormGroup({
    username: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required])
  })

  medico: MedicoLogin = {
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

get medicoActual(): MedicoLogin{
  const medico = this.form.value as MedicoLogin;
  return medico
}

  onSubmit(): void{

    if(!this.medicoActual){
      return;
    }

    if(this.form.valid){

      this.http.loginPaciente(this.medicoActual.email, this.medicoActual.password)
        .subscribe (resp => {
        // this.router.navigate(['home-up/up-perfil/', paciente]);
        // mensaje
        this.mostrarSnack(`Hola ${this.medicoActual.username}, te damos nuevamente la bienvenida a HCP`)
  
      });
      console.log(this.medicoActual)
      console.log({
        formIsValid: this.form.valid,
          valor: this.form.value
        });
      } else{
        this.mostrarSnack(`${this.medicoActual.username} Los datos ingresados no son válidos`)
        throw Error('Los datos ingresados no son válidos')
      }

  }

  mostrarSnack( mensaje: string ){
    this.snackBar.open( mensaje, 'cerrar',{
      duration: 2500,
    });
}

ngOnInit() {
  
}
}
