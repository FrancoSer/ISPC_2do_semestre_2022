import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico, } from '../users/interfaces/interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/envaironment';
import { MedicoRegistro } from './interfaces/auth';

@Injectable( {
  providedIn: 'root'
} )

export class AuthUmService
{

  private baseUrl = environment.baseUrl;

  constructor ( private http: HttpClient ) { }

  registroMedico ( medico: MedicoRegistro ): Observable<Medico>
  {
    return this.http.post<Medico>( `${ this.baseUrl }/api/medico/signup/`, medico );

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
