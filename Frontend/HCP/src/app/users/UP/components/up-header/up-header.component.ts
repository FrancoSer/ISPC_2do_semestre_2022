import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-up-header',
  templateUrl: './up-header.component.html',
  styleUrls: ['./up-header.component.css']
})
export class UPHeaderComponent implements OnInit {
  ngOnInit(): void {
    
  }
  @Output() sideNavToggled2 = new EventEmitter<boolean>();
  menuStatus2: boolean = true;
  SideNavToggle2() {
    this.menuStatus2 = !this.menuStatus2;
    this.sideNavToggled2.emit(this.menuStatus2);
}
}
