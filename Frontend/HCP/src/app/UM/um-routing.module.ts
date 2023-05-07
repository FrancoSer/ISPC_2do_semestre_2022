import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UMHistorialComponent } from './pages/historial/um-historial.component';
import { UMAgendaComponent } from './pages/agenda/um-agenda.component';

const routes:Routes=[
  {
    path:'um-historial',
    component:UMHistorialComponent
  },
  {
    path: 'um-agenda',
    component: UMAgendaComponent
  },

]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  
  ],
  exports:[
    RouterModule
  ]
})
export class UmRoutingModule { }
