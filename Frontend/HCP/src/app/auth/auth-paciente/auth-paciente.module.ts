import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPacienteComponent } from './login-paciente/login-paciente/login-paciente.component';
import { RegistroPacienteComponent } from './registro-paciente/registro-paciente/registro-paciente.component';



@NgModule({
  declarations: [
    LoginPacienteComponent,
    RegistroPacienteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthPacienteModule { }
