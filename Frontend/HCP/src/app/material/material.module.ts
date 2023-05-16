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
// spinner
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
 exports: [
  
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatIconModule,
  MatProgressSpinnerModule
 ]
})
export class MaterialModule { }
