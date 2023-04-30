import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteComponent } from './paciente/components/paciente/paciente.component';
import { ProfesionalComponent } from './profesional/components/profesional/profesional.component';
import { HomeComponent } from './home/components/home.component';



@NgModule({
  declarations: [
    PacienteComponent,
    ProfesionalComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
  ],
})
export class UsuariosModule { }
