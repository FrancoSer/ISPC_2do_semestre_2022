import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { UPHomeComponent } from './UP/pages/home/UP-home.component';
import { UMHistorialComponent } from './UM/pages/historial/um-historial.component';
import { UMHomeComponent } from './UM/pages/home/UM-home.component';
import { PlanPremiumComponent } from './UP/shop/plan-premium/plan-premium.component';
import { UPPerfilComponent } from './UP/pages/UP-perfil/UP-perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { PremiumPipe } from './premium.pipe';
import { UPWelcomeComponent } from './UP/components/UP-welcome/UP-welcome.component';

const routes: Routes = [

  {
    path: 'home-up',
    component: UPHomeComponent,
    children: [
      {
        path: 'up-historial',
        component: UMHistorialComponent,
      },
      {
        path: 'up-welcome',
        component: UPWelcomeComponent
      },
      {
        path: 'plan-premium',
        component: PlanPremiumComponent
      },
      {
        path: 'up-perfil',
        component: UPPerfilComponent
      }
    ]
  },

  {
    path: 'home-um',
    component: UMHomeComponent,
    children: [
      { path: 'um-historial', component: UMHistorialComponent }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [RouterModule],
  declarations: [

  ]
})
export class UsersRoutingModule { }
