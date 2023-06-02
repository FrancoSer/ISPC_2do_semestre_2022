import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Medico, MedicoRegistro } from 'src/app/users/interfaces/interfaces';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-UM-registro',
  templateUrl: './UM-registro.component.html',
  styleUrls: ['./UM-registro.component.css']
})


export class UMRegistroComponent implements OnInit {

  minChars: number = 9;
  maxChars: number = 15;

  public medicoForm = new FormGroup({

    username:          new FormControl<string>('', [Validators.required]),
    // apellido:       new FormControl<string>(''),
    // cuil:           new FormControl<string>(''),
    email:             new FormControl<string>('', [Validators.required, Validators.email]),
    password:          new FormControl<string>('', [Validators.required, Validators.maxLength(this.maxChars), Validators.minLength(this.minChars)]),
    // passwordRepet:  new FormControl<string>(''),
    // nacimiento:     new FormControl<string>(''),
    // genero:         new FormControl<Genero>(Genero.masculino),
    // grupoSanguineo: new FormControl<GrupoSanguineo>(GrupoSanguineo.Apositivo),
    
  });

  medico: MedicoRegistro = {
    
    username: '',
    // apellido: '',
    // matricula: '',
    email: '',
    password: '',
    // passwordRepeat: '',
    // nacimiento: '',

  }

  constructor(

    private medicoServicio: AuthService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog

    
  ) {}

  get username() { 
    return this.medicoForm.get("username"); 
  }
  get email() { 
    return this.medicoForm.get("email"); 
  }

  get password(){
    return this.medicoForm.get('password')
  }
  get medicoActual(): MedicoRegistro{

    const medico = this.medicoForm.value as MedicoRegistro;
    return medico

  }

  onSubmit(): void{
    if(!this.medicoActual){
      return;
    }

    if(this.medicoForm.valid){
    this.medicoServicio.registroMedico(this.medicoActual)
      .subscribe (medico => {
      // this.router.navigate(['home-up/up-perfil/', paciente]);
      // mensaje
      this.mostrarSnack(`${this.medicoActual.username} su perfil ha sido creado con éxito`)

    });
    console.log(this.medicoActual)
    console.log({
      formIsValid: this.medicoForm.valid,
        valor: this.medicoForm.value
      });
    }else{
      this.mostrarSnack(`${this.medicoActual.username} El formulario no es válido`)
      throw Error('El formulario no es válido')
    }
  }


  
  mostrarSnack( mensaje: string ){
    this.snackBar.open( mensaje, 'data',{
      duration: 2500,
    });
}
  ngOnInit() {
  }

}
