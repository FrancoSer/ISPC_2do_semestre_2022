import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './layout/inicio/inicio.component';
import { AuthModuleModule } from './auth/auth-module.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
