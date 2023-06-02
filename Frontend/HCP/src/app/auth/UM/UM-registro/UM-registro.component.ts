import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  public medicoForm = new FormGroup({

    username:          new FormControl<string>(''),
    // apellido:       new FormControl<string>(''),
    // cuil:           new FormControl<string>(''),
    email:             new FormControl<string>(''),
    password:          new FormControl<string>(''),
    // passwordRepet:  new FormControl<string>(''),
    // nacimiento:     new FormControl<string>(''),
    // genero:         new FormControl<Genero>(Genero.masculino),
    // grupoSanguineo: new FormControl<GrupoSanguineo>(GrupoSanguineo.Apositivo),
    
  });

  medico: MedicoRegistro = {
    
    username: '',
    apellido: '',
    matricula: '',
    email: '',
    password: '',
    passwordRepeat: '',
    nacimiento: '',

  }

  constructor(

    private medicoServicio: AuthService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog

    
  ) {}

  get medicoActual(): Medico{

    const medico = this.medicoForm.value as Medico;
    return medico

  }

  onSubmit(): void{
    if(!this.medicoActual){
      return;
    }

    this.medicoServicio.registroMedico(this.medicoActual)
      .subscribe (medico => {
      // this.router.navigate(['home-up/up-perfil/', paciente]);
      // mensaje
      this.mostrarSnack(`${this.medico.username} su perfil ha sido creado`)

    });
    console.log(this.medicoActual)
    console.log({
      formIsValid: this.medicoForm.valid,
        valor: this.medicoForm.value
      });
  }


  
  mostrarSnack( mensaje: string ){
    this.snackBar.open( mensaje, 'data',{
      duration: 2500,
    });
}
  ngOnInit() {
  }

}
