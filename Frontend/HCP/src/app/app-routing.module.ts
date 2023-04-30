import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error/error-page/error-page.component';
import { HomeComponent } from './usuarios/home/components/home.component';

const routes: Routes = [


  {

    path: 'auth',
    loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)

  },
  {
    path: 'inicio',
    component: HomeComponent
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
