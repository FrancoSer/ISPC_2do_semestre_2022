import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { UPHomeComponent } from './UP/pages/home/UP-home.component';
import { UMHistorialComponent } from './UM/pages/historial/um-historial.component';
import { UMHomeComponent } from './UM/pages/home/UM-home.component';
import { PlanPremiumComponent } from './UP/shop/plan-premium/plan-premium.component';
import { UPPerfilComponent } from './UP/pages/UP-perfil/UP-perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { UPWelcomeComponent } from './UP/components/UP-welcome/UP-welcome.component';
import { UPHistorialComponent } from './UP/pages/UP-historial/UP-historial.component';
import { NuevoHistorialComponent } from './UM/pages/nuevo-historial/nuevo-historial.component';
import { UMPerfilComponent } from './UM/pages/UM-perfil/UM-perfil.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [



  {
    path: 'home-up',
    component: UPHomeComponent,
    children: [
      {
        path: 'up-historial',
        component: UPHistorialComponent,
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
        path: 'up-perfil/:id',
        component: UPPerfilComponent
      },
      {
        path: 'sobre-hcp',
        component: InfoComponent
      }
    ]
  },

  {
    path: 'home-um',
    component: UMHomeComponent,
    children: [
      {
        path: 'um-historial', component: UMHistorialComponent
      },
      {
        path: 'um-perfil', component: UMPerfilComponent
      },
      {
        path: 'nuevo-historial/:id', component: NuevoHistorialComponent
      },
      {
        path: 'sobre-hcp',
        component: InfoComponent
      }
    ]
  },

];

@NgModule( {
  imports: [
    RouterModule.forChild( routes ),
    HttpClientModule
  ],
  exports: [ RouterModule ],
  declarations: [

  ]
} )
export class UsersRoutingModule { }
