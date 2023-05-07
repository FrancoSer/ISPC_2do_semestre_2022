import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UMHistorialComponent } from './pages/historial/um-historial.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { UMHomeComponent } from './pages/home/UM-home.component';
import { UmRoutingModule } from './um-routing.module';
import { UMAgendaComponent } from './pages/agenda/um-agenda.component';

@NgModule({
  declarations: [
   
    UMHistorialComponent,
    SidebarComponent,
    HeaderComponent,
    UMHomeComponent,
    UMAgendaComponent
    
  ],
  imports: [
    CommonModule,
    UmRoutingModule
  ]
})
export class UMModule { }
