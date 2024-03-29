import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './pages/error/error-page.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';


@NgModule( {
  declarations: [
    ErrorPageComponent,
    InicioComponent,
    SobreNosotrosComponent,
    FooterComponent,


  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [

  ]
} )
export class SharedModule { }
