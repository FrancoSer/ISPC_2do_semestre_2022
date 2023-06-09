import { Component, Input } from '@angular/core';

@Component( {
  selector: 'app-up-sidebar',
<<<<<<< HEAD:Frontend/HCP/src/app/users/UP/components/UP-siderbar/UP-sidebar.component.ts
  templateUrl: './UP-sidebar.component.html',
  styleUrls: ['./UP-sidebar.component.css']
})
export class UPSidebarComponent {
=======
  templateUrl: './up-sidebar.component.html',
  styleUrls: [ './up-sidebar.component.css' ]
} )
export class UPSidebarComponent
{
>>>>>>> f90cf24c17c15b1bbaea4072f8a4e9c3f24f6f2f:Frontend/HCP/src/app/users/UP/components/up-siderbar/up-sidebar.component.ts
  @Input() sideNavStatus2: boolean = true;
}
