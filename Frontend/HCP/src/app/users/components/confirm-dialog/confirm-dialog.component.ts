import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Paciente } from '../../interfaces/interfaces';

@Component( {
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: [ './confirm-dialog.component.css' ]
} )
export class ConfirmDialogComponent implements OnInit
{
  constructor (
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject( MAT_DIALOG_DATA )
    public data: Paciente
  )
  { }


  ngOnInit (): void
  {
    throw new Error( 'Method not implemented.' );
  }
  onNoClick (): void
  {
    this.dialogRef.close( false );
  }

  onConfirm (): void
  {
    this.dialogRef.close( true );
  }
}
