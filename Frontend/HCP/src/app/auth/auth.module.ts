import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UPLoginComponent } from './UP/UP-login/UP-login.component';
import { UMLoginComponent } from './UM/UM-login/UM-login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { UMRegistroComponent } from './UP/UP-registro/UM-registro.component';
import { UPRegistroComponent } from './UM/UM-registro/UP-registro.component';


@NgModule({
  declarations: [
    UMLoginComponent,
    UMRegistroComponent,
    UPLoginComponent,
    UPRegistroComponent

  ],
  imports: [
    CommonModule,
    AuthRoutingModule
    
  ]
})
export class AuthModule { }
