import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico, Paciente } from '../users/interfaces/interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/envaironment';
import { MedicoRegistro, PacienteRegistro } from './interfaces/auth';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService
{

  private baseUrl = environment.baseUrl;

  constructor ( private http: HttpClient ) { }

  registroPaciente ( paciente: PacienteRegistro ): Observable<Paciente>
  {
    console.log( `este es el error ${ ( paciente ) }` );
    return this.http.post<Paciente>( `${ this.baseUrl }/api/auth/signup/`, paciente );

  }

  registroMedico ( medico: MedicoRegistro ): Observable<Medico>
  {
    return this.http.post<Medico>( `${ this.baseUrl }/api/auth/signup/`, medico );

  }

  loginPaciente ( email: string, password: string )
  {

    const body = {
      email: email,
      password: password
    };
    return this.http.post( `${ this.baseUrl }/api/auth/login/`, body );
  }

  loginMedico ( username: string, email: string, password: string )
  {

    const body = {
      username: username,
      email: email,
      password: password
    };
    return this.http.post( `${ this.baseUrl }/api/auth/login/`, body );
  }

}
