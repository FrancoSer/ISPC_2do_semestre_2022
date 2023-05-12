import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/pages/error/error-page.component';
import { InicioComponent } from './shared/pages/inicio/inicio.component';

import { UMHomeComponent } from './users/UM/pages/home/UM-home.component';
import { UPHomeComponent } from './users/UP/pages/home/up-home.component';
import { SobreNosotrosComponent } from './shared/pages/sobre-nosotros/sobre-nosotros.component';
<<<<<<< HEAD
import { FooterComponent } from './shared/footer/footer.component';


=======
import { UMHistorialComponent } from './users/UM/pages/historial/um-historial.component';
>>>>>>> 5a2530ab9c2dc927f124ef09f81ffabf452ae1f2

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
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
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
<<<<<<< HEAD

  },
  {
    path: 'footer', component:FooterComponent 
    
=======
>>>>>>> 5a2530ab9c2dc927f124ef09f81ffabf452ae1f2
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
