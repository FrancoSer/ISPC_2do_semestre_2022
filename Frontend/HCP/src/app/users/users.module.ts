import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PlanPremiumComponent } from './UP/shop/plan-premium/plan-premium.component';
import { HeaderComponent } from './UM/components/header/header.component';
import { SidebarComponent } from './UM/components/sidebar/sidebar.component';
import { UMHistorialComponent } from './UM/pages/historial/um-historial.component';
import { UMHomeComponent } from './UM/pages/home/UM-home.component';
import { UPHeaderComponent } from './UP/components/up-header/up-header.component';
import { UPSidebarComponent } from './UP/components/up-siderbar/up-sidebar.component';
import { UPHomeComponent } from './UP/pages/home/UP-home.component';
import { UMPerfilComponent } from './UM/pages/UM-perfil/UM-perfil.component';
import { UPPerfilComponent } from './UP/pages/UP-perfil/UP-perfil.component';

import { PremiumPipe } from './premium.pipe';
<<<<<<< HEAD


=======
import { GeneroPipe } from './UP/pipes/genero.pipe';
import { UPWelcomeComponent } from './UP/components/UP-welcome/UP-welcome.component';
>>>>>>> 0af0bda94dc981a8e8384d580424cba60885958a

@NgModule({
  declarations: [

    PlanPremiumComponent,
    HeaderComponent,
    GeneroPipe,
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
    FlexLayoutModule


  ]
})
export class UsersModule { }
