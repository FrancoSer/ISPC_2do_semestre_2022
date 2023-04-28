import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPacienteModule } from './auth-paciente/auth-paciente.module';
import { AuthProfesionalModule } from './auth-profesional/auth-profesional.module';

@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    AuthPacienteModule,
    AuthProfesionalModule
  ]
})
export class AuthModuleModule { }
