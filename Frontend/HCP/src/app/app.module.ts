import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { FOOTERComponent } from './footer/footer.component';


@NgModule({
  declarations: [	
    AppComponent, FOOTERComponent,
   
   ],
  imports: [
    AuthModule,
    BrowserModule,
    SharedModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
