import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UPLoginComponent } from './UP/UP-login/UP-login.component';
import { UPRegistroComponent } from './UP/UP-registro/UP-registro.component';
import { UMLoginComponent } from './UM/UM-login/UM-login.component';
import { UMRegistroComponent } from './UM/UM-registro/UM-registro.component';

const routes: Routes = [
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
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
