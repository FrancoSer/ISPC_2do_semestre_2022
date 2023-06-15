import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Paciente } from '../../../interfaces/interfaces';
import { AuthUpService } from 'src/app/auth/auth-up.service';

@Component( {
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: [ './confirm-dialog.component.css' ]
} )
export class ConfirmDialogComponent implements OnInit
{
  constructor (
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    private http: AuthUpService,
    @Inject( MAT_DIALOG_DATA )
    public data: Paciente
  )
  { }

  public paciente?: Paciente;


  ngOnInit (): void
  {
    this.paciente = this.http.getPacienteActual();
    throw new Error( 'Method not implemented.' );

  }
  onNoClick (): void
  {
    this.dialogRef.close( false );
  };

  onConfirm (): void
  {
    this.dialogRef.close( true );
  }

}
