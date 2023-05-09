import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/pages/error/error-page.component';
import { InicioComponent } from './shared/pages/inicio/inicio.component';

import { UMHomeComponent } from './users/UM/pages/home/UM-home.component';
import { UPHomeComponent } from './users/UP/pages/home/UP-home.component';
import { SobreNosotrosComponent } from './shared/pages/sobre-nosotros/sobre-nosotros.component';
import { UMHistorialComponent } from './users/UM/pages/historial/um-historial.component';

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
    component: UPHomeComponent,
    children: [
      { path: 'up-historial', component: UMHistorialComponent }
    ]
  },

  {
    path: 'home-um',
    component: UMHomeComponent,
    children:[
      {path:'um-historial', component:UMHistorialComponent}
    ]
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
