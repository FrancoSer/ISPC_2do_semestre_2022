import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico, MedicoRegistro, Paciente, PacienteRegistro } from '../users/interfaces/interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/envaironment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private baseUrl = environment.baseUrl

constructor(private http: HttpClient) { }

registroPaciente(paciente: PacienteRegistro): Observable<Paciente>{
  return this.http.post<Paciente>(`${this.baseUrl}/api/auth/signup/`, paciente)

}

registroMedico(medico: MedicoRegistro): Observable<Medico>{
  return this.http.post<Medico>(`${this.baseUrl}/api/auth/signup/`, medico)

}

}
