import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/pages/error/error-page.component';
import { InicioComponent } from './shared/pages/inicio/inicio.component';
import { UMLoginComponent } from './auth/UM/UM-login/UM-login.component';
import { UMRegistroComponent } from './auth/UM/UM-registro/UM-registro.component';
import { UPLoginComponent } from './auth/UP/UP-login/UP-login.component';
import { UPRegistroComponent } from './auth/UP/UP-registro/UP-registro.component';
import { UMHomeComponent } from './UM/pages/home/UM-home.component';
import { UPHomeComponent } from './UP/pages/home/UP-home.component';
import { SobreNosotrosComponent } from './shared/pages/sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [


  {
    path: '',
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
    path: 'home-up',
    component: UPHomeComponent
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
    path: 'home-um',
    component: UMHomeComponent
  },
  {
    path: 'sobre-nosotros',
    component: SobreNosotrosComponent
  },
  {
    path: '404',
    component: ErrorPageComponent
  },

  {

    path: '**',
    redirectTo: ''

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
