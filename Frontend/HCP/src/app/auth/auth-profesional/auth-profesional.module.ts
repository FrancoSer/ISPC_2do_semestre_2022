import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginProfesionalComponent } from './login-profesional/login-profesional/login-profesional.component';
import { RegistroProfesionalComponent } from './registro-profesional/registro-profesional/registro-profesional.component';



@NgModule({
  declarations: [
    LoginProfesionalComponent,
    RegistroProfesionalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthProfesionalModule { }
