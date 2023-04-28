import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error/error-page/error-page.component';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import ('./auth/auth-module.module').then(m => m.AuthModuleModule) 
  },

  {
    path: '404',
    component: ErrorPageComponent
    
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
