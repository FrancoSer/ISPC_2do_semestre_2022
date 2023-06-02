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
// snackbar
import { MatSnackBarModule} from '@angular/material/snack-bar';
// dialog
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
 exports: [
  
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatListModule,
  MatIconModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
 ]
})
export class MaterialModule { }
