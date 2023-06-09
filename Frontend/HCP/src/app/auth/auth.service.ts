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
    return this.http.post<Paciente>( `${ this.baseUrl }/api/paciente/signup/`, paciente );

  }

  registroMedico ( medico: MedicoRegistro ): Observable<Medico>
  {
    return this.http.post<Medico>( `${ this.baseUrl }/api/medico/signup/`, medico );

  }

  loginPaciente ( cuil: string, password_p: string )
  {

    const body = {
      cuil: cuil,
      password_p: password_p
    };
    return this.http.post( `${ this.baseUrl }/api/paciente/login/`, body );

  }

  loginMedico ( matricula: string, password_m: string )
  {

    const body = {
      matricula: matricula,
      password_m: password_m
    };
    return this.http.post( `${ this.baseUrl }/api/medico/login/`, body );
  }

}
