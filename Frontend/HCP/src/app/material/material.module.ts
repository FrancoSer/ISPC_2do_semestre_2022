import { NgModule } from '@angular/core';

//button
import {MatButtonModule} from '@angular/material/button';
// card
import {MatCardModule} from '@angular/material/card';
// grid
import {MatGridListModule} from '@angular/material/grid-list';
// list
import {MatListModule} from '@angular/material/list';
// icon
import {MatIconModule} from '@angular/material/icon';

@NgModule({
 exports: [
  
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatIconModule
 ]
})
export class MaterialModule { }
