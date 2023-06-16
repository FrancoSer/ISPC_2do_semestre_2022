import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './UM/components/header/header.component';
import { SidebarComponent } from './UM/components/sidebar/sidebar.component';
import { UMHistorialComponent } from './UM/pages/historial/um-historial.component';
import { UMHomeComponent } from './UM/pages/home/UM-home.component';
import { UPHeaderComponent } from './UP/components/up-header/up-header.component';
import { UPSidebarComponent } from './UP/components/up-siderbar/up-sidebar.component';
import { UPHomeComponent } from './UP/pages/home/UP-home.component';
import { UMPerfilComponent } from './UM/pages/UM-perfil/UM-perfil.component';
import { UPPerfilComponent } from './UP/pages/UP-perfil/UP-perfil.component';

import { PremiumPipe } from './UP/shop/pipes/premium.pipe';
import { BienvenidaPipe } from './UP/pipes/bienvenida.pipe';

import { UPWelcomeComponent } from './UP/components/UP-welcome/UP-welcome.component';

import { NuevoHistorialComponent } from './UM/pages/nuevo-historial/nuevo-historial.component';
import { InfoComponent } from './components/info/info.component';
import { ConfirmDialogComponent } from './UP/components/confirm-dialog/confirm-dialog.component';
import { SeguroPipe } from './UP/pipes/seguro.pipe';
import { PlanPremiumComponent } from './UP/shop/plan-premium/plan-premium.component';




@NgModule( {
  declarations: [

    BienvenidaPipe,
    ConfirmDialogComponent,
    HeaderComponent,
    InfoComponent,
    NuevoHistorialComponent,
    SeguroPipe,
    SidebarComponent,
    UMHistorialComponent,
    UMHomeComponent,
    UMPerfilComponent,
    UPPerfilComponent,
    UPHeaderComponent,
    UPSidebarComponent,
    UPHomeComponent,
    UPWelcomeComponent,
    PlanPremiumComponent,
    PremiumPipe

  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
} )
export class UsersModule { }
