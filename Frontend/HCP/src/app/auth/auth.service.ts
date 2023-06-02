import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente, PacienteRegistro } from '../users/interfaces/interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/envaironment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private baseUrl = environment.baseUrl

constructor(private http: HttpClient) { }

registroPaciente(paciente: Paciente): Observable<Paciente>{
  return this.http.post<Paciente>(`${this.baseUrl}/paciente`, paciente)

}

}
