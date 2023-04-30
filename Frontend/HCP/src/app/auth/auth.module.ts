import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginPacienteComponent } from './login/login-paciente.component';
import { LoginProfesionalComponent } from './login/login-profesional.component';
import { RegistroPacienteComponent } from './registro/registro-paciente.component';
import { RegistroProfesionalComponent } from './registro/registro-profesional.component';



@NgModule({
  declarations: [
    
    LoginPacienteComponent,
    LoginProfesionalComponent,
    RegistroPacienteComponent,
    RegistroProfesionalComponent

  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule{ }
