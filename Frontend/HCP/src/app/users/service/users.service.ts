import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environment/envaironment';
import { Paciente } from '../interfaces/interfaces';

@Injectable( {
  providedIn: 'root'
} )
export class UsersService
{

  private baseUrl = environment.baseUrl;

  constructor ( private http: HttpClient ) { }

  // buscar pacientes

  getBuscarPaciente ( termino: string ): Observable<Paciente[]>
  {

    return this.http.get<Paciente[]>( `${ this.baseUrl }/api/paciente/?q=${ termino }` );

  }

  // mostrar por ID

  getPacientePorId ( id: string ): Observable<Paciente | undefined>
  {
    return this.http.get<Paciente>( `${ this.baseUrl }/api/paciente/${ id }/` )
      .pipe(
        catchError( error => of( undefined ) )
      );
  }

  // get id
  idActual: string = '';

  // mostrar pacientes

  getPacientes (): Observable<Paciente[]>
  {
    return this.http.get<Paciente[]>( `${ this.baseUrl }/api/paciente/` );
  }

  // editar paciente

  editarPaciente ( paciente: any )
  {
    return this.http.patch<Paciente>( `${ this.baseUrl }/api/paciente/${ localStorage.getItem( 'token' ) }/`, paciente );
  }

  // eliminar paciente

  eliminarPaciente ()
  {

    return this.http.delete( `${ this.baseUrl }/api/paciente/${ localStorage.getItem( 'token' ) }/` );

  }

}
