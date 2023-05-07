import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlanPremiumComponent } from './UP/shop/plan-premium/plan-premium.component';
import { UMModule } from './UM/um.module';

import { UpModule } from './UP/up.module';





@NgModule({
  declarations: [	
    AppComponent,
    PlanPremiumComponent,
    
   
   ],
  imports: [
    AuthModule,
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UMModule,
    UpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
