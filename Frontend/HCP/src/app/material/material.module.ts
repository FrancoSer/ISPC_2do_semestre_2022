import { NgModule } from '@angular/core';

// autocomplete
import { MatAutocompleteModule } from '@angular/material/autocomplete';
//button
import { MatButtonModule } from '@angular/material/button';
// card
import { MatCardModule } from '@angular/material/card';
// dialog
import { MatDialogModule } from '@angular/material/dialog';
// form
import { MatFormFieldModule } from '@angular/material/form-field';
// grid
import { MatGridListModule } from '@angular/material/grid-list';
// list
import { MatListModule } from '@angular/material/list';
// icon
import { MatIconModule } from '@angular/material/icon';
// spinner
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// snackbar
import { MatSnackBarModule } from '@angular/material/snack-bar';
// toolbar
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule( {
    exports: [

        MatAutocompleteModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatFormFieldModule,
        MatGridListModule,
        MatListModule,
        MatIconModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatToolbarModule
    ]
} )
export class MaterialModule { }
