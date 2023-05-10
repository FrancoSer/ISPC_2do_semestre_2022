import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UPHomeComponent } from './UP/pages/home/UP-home.component';
import { UMHistorialComponent } from './UM/pages/historial/um-historial.component';
import { UMHomeComponent } from './UM/pages/home/UM-home.component';

const routes: Routes = [

  {
    path: 'home-up',
    component: UPHomeComponent,
    children: [
      { path: 'up-historial', component: UMHistorialComponent }
    ]
  },

  {
    path: 'home-um',
    component: UMHomeComponent,
    children:[
      {path:'um-historial', component:UMHistorialComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
