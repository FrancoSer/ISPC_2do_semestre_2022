import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/envaironment';
import { Medico } from '../users/interfaces/interfaces';
import { MedicoRegistro, PacienteRegistro } from './interfaces/auth';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )

export class AuthUmService
{

  private baseUrl = environment.baseUrl;

  // defino el medico cuando loguee
  private medico?: Medico;

  constructor (

    private http: HttpClient

  ) { }

  // get

  getMedicoActual (): Medico | undefined
  {

    if ( !this.medico ) return undefined;

    return structuredClone( this.medico );
  }
  // login

  loginMedico ( matricula: string, password_m: string ): Observable<Medico>
  {

    const body = {
      matricula: matricula,
      password_m: password_m
    };
    return this.http.post<Medico>( `${ this.baseUrl }/api/medico/login/`, body )
      .pipe(
        tap(
          medico => this.medico = medico as Medico
        ),
        tap( medico => localStorage.setItem( 'token', medico.id.toString() ) )
      );
  }

  // check auth

  checkAuth (): Observable<boolean>
  {

    if ( !localStorage.getItem( 'token' ) ) return of( false );

    const token = localStorage.getItem( 'token' );

    console.log( token );

    return this.http.get<Medico>( `${ this.baseUrl }/api/medico/${ token }/` )
      .pipe(
        tap( medico => this.medico = medico ),
        map( medico => !!medico ),
        catchError( err => of( false ) )
      );

  }

  // logout

  logoutMedico ()
  {
    this.medico = undefined;
    localStorage.clear();
  }

  // registro

  registroMedico ( medico: MedicoRegistro ): Observable<Medico>
  {
    return this.http.post<Medico>( `${ this.baseUrl }/api/medico/signup/`, medico );

  }

}
