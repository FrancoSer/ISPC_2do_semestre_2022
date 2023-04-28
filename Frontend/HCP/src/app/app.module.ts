import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginMedicoComponent } from './auth/um/pages/login-medico/login-medico.component';
import { LoginPacienteComponent } from './auth/up/pages/login-paciente/login-paciente.component';
import { RegistroMedicoComponent } from './auth/um/pages/registro-medico/registro-medico.component';
import { RegistroPacienteComponent } from './auth/up/pages/registro-paciente/registro-paciente.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginMedicoComponent,
    LoginPacienteComponent,
    RegistroMedicoComponent,
    RegistroPacienteComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
