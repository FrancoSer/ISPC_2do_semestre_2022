import { Component, Input } from '@angular/core';

@Component( {
  selector: 'app-up-sidebar',
  templateUrl: './up-sidebar.component.html',
  styleUrls: [ './up-sidebar.component.css' ]
} )
export class UPSidebarComponent
{
  @Input() sideNavStatus2: boolean = true;
}
