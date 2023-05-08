import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environment/envaironment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl = environment.baseUrl

  constructor( private http: HttpClient) { }

}
