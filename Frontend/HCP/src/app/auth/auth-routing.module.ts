import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPacienteComponent } from './auth-paciente/login-paciente/login-paciente/login-paciente.component';
import { LoginProfesionalComponent } from './auth-profesional/login-profesional/login-profesional/login-profesional.component';

const routes: Routes = [
  
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
