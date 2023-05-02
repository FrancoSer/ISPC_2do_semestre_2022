import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './shared/pages/inicio/inicio.component';
import { UPLoginComponent } from './auth/UP/UP-login/UP-login.component';
import { ErrorPageComponent } from './shared/pages/error/error-page.component';
import { UPRegistroComponent } from './auth/UP/UP-registro/UP-registro.component';
import { UMLoginComponent } from './auth/UM/UM-login/UM-login.component';
import { UMRegistroComponent } from './auth/UM/UM-registro/UM-registro.component';



const routes: Routes = [


  {
    path: 'inicio',
    component: InicioComponent

  },

  {
    path: 'login-up',
    component: UPLoginComponent
  },
  {
    path: 'registro-up',
    component: UPRegistroComponent
  },
  {
    path: 'login-um',
    component: UMLoginComponent
  },
  {
    path: 'registro-um',
    component: UMRegistroComponent
  },
  {

    path: '404',
    component: ErrorPageComponent

  },

  {

    path: '**',
    // component: ErrorPageComponent
    redirectTo: 'inicio'

  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
