import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component( {
  selector: 'app-nuevo-historial',
  templateUrl: './nuevo-historial.component.html',
  styleUrls: [ './nuevo-historial.component.css' ]
} )
export class NuevoHistorialComponent implements OnInit
{

  private form = new FormGroup( {

    referencia_p: new FormControl<string>( '' ),
    especialidad: new FormControl<string>( '' ),
    diagnositico: new FormControl<string>( '' ),
    antecedentes: new FormControl<string>( '' ),
    presion: new FormControl<string>( '' ),
    altura: new FormControl<string>( '' ),
    prueba_diagnostica: new FormControl<string>( '' ),
    medicacion: new FormControl<string>( '' ),
    dieta: new FormControl<string>( '' ),
    vacuna: new FormControl<string>( '' ),
    proxima_visita: new FormControl<string>( '' ),
    observaciones: new FormControl<string>( '' ),
    adjunto: new FormControl<string>( '' )

  } );

  constructor () { }

  ngOnInit ()
  {
  }

}
