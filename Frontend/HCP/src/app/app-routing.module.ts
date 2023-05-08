import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/pages/error/error-page.component';
import { InicioComponent } from './shared/pages/inicio/inicio.component';

import { SobreNosotrosComponent } from './shared/pages/sobre-nosotros/sobre-nosotros.component';
import { UPHomeComponent } from './usuarios/UP/pages/home/UP-home.component';
import { UMHomeComponent } from './usuarios/UM/pages/home/UM-home.component';

const routes: Routes = [


  {
    path: '',
    component: InicioComponent
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: 'home-up',
    component: UPHomeComponent
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
