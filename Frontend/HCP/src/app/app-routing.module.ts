import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/pages/error/error-page.component';
import { InicioComponent } from './shared/pages/inicio/inicio.component';

import { SobreNosotrosComponent } from './shared/pages/sobre-nosotros/sobre-nosotros.component';
import { InfoComponent } from './users/components/info/info.component';
import { AuthUpGuard } from './auth/guards/auth-up.guard';

const routes: Routes = [


  {
    path: '',
    component: InicioComponent
  },

  {
    path: 'auth',
    loadChildren: () => import( './auth/auth.module' ).then( m => m.AuthModule ),

  },

  {
    path: 'users',
    loadChildren: () => import( './users/users.module' ).then( m => m.UsersModule )

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

  },

];

@NgModule( {
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
} )
export class AppRoutingModule { }
