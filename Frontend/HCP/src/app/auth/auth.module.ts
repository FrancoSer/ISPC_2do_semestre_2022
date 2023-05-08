import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UPLoginComponent } from './UP/UP-login/UP-login.component';
import { UMLoginComponent } from './UM/UM-login/UM-login.component';
import { UMRegistroComponent } from './UM/UM-registro/UM-registro.component';
import { UPRegistroComponent } from './UP/UP-registro/UP-registro.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UMLoginComponent,
    UMRegistroComponent,
    UPLoginComponent,
    UPRegistroComponent
  

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class AuthModule { }
