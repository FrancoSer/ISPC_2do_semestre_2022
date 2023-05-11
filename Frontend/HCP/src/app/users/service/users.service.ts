import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/envaironment';
import { Paciente } from '../interfaces/iterfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = environment.baseUrl

constructor( private http: HttpClient) { }

getPaciente(): Observable<Paciente[]>{
  return this.http.get<Paciente[]>(`${this.baseUrl}/paciente`)
}

}
