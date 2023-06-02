import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-up-sidebar',
  templateUrl: './UP-sidebar.component.html',
  styleUrls: ['./UP-sidebar.component.css']
})
export class UPSidebarComponent {
  @Input() sideNavStatus2: boolean = true;
}
