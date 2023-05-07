import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/pages/error/error-page.component';
import { InicioComponent } from './shared/pages/inicio/inicio.component';
import { UMHomeComponent } from './UM/pages/home/UM-home.component';
import { UPHomeComponent } from './UP/pages/home/UP-home.component';
import { SobreNosotrosComponent } from './shared/pages/sobre-nosotros/sobre-nosotros.component';
import { FooterComponent } from './shared/footer/footer.component';



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

  },
  {
    path: 'footer', component:FooterComponent 
    
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
