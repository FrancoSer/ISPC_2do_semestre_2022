import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpRoutingModule } from './up-routing.module';
import { UPHomeComponent } from './pages/home/UP-home.component';
import { UPHeaderComponent } from './up-header/up-header.component';
import { UPSidebarComponent } from './up-siderbar/up-sidebar.component';


@NgModule({
  declarations: [
    UPHomeComponent, 
    UPHeaderComponent, 
    UPSidebarComponent
  ],
  imports: [
    CommonModule,
    UpRoutingModule
  ]
})
export class UpModule { }
