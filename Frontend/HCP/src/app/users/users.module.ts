import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PlanPremiumComponent } from './UP/shop/plan-premium/plan-premium.component';
import { HeaderComponent } from './UM/components/header/header.component';
import { SidebarComponent } from './UM/components/sidebar/sidebar.component';
import { UMHistorialComponent } from './UM/pages/historial/um-historial.component';
import { UMHomeComponent } from './UM/pages/home/UM-home.component';
import { UPHeaderComponent } from './UP/components/up-header/up-header.component';
import { UPSidebarComponent } from './UP/components/up-siderbar/up-sidebar.component';
import { UPHomeComponent } from './UP/pages/home/UP-home.component';


@NgModule({
  declarations: [
    UMHistorialComponent,
    UMHomeComponent,
    HeaderComponent,
    SidebarComponent,
    UPHeaderComponent,
    UPSidebarComponent,
    UPHomeComponent,
    PlanPremiumComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
