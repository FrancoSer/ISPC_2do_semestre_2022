import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/envaironment';
import { Paciente } from '../users/interfaces/interfaces';
import { PacienteRegistro } from './interfaces/auth';
import { Observable, of, tap, map, catchError } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class AuthUpService
{

  private baseUrl = environment.baseUrl;

  // defino el paciente cuando loguee
  private paciente?: Paciente;

  constructor (

    private http: HttpClient

  ) { }

  // get

  getPacienteActual (): Paciente | undefined
  {

    if ( !this.paciente ) return undefined;

    return structuredClone( this.paciente );
  }
  // login

  loginPaciente ( cuil: string, password_p: string ): Observable<Paciente>
  {

    const body = {
      cuil: cuil,
      password_p: password_p
    };
    return this.http.post<Paciente>( `${ this.baseUrl }/api/paciente/login/`, body )
      .pipe(
        tap(
          paciente => this.paciente = paciente as Paciente
        ),
        tap( paciente => localStorage.setItem( 'token', paciente.id.toString() )
        )
      );
  }

  // check auth

  checkAuth (): Observable<boolean>
  {

    if ( !localStorage.getItem( 'token' ) ) return of( false );

    const token = localStorage.getItem( 'token' );

    return this.http.get<Paciente>( `${ this.baseUrl }/api/paciente/${ token }` )
      .pipe(
        tap( paciente => this.paciente = paciente ),
        map( paciente => !!paciente ),
        catchError( err => of( false ) )
      );

  }

  // logout

  logoutPaciente ()
  {
    this.paciente = undefined;
    localStorage.clear();
  }

  // registro

  registroPaciente ( paciente: PacienteRegistro ): Observable<Paciente>
  {
    return this.http.post<Paciente>( `${ this.baseUrl }/api/paciente/signup/`, paciente );

  }

}
