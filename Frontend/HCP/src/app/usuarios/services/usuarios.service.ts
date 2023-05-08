import { Injectable } from '@angular/core';
import { environment } from '../../environment/envaironment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl = environment.baseUrl

constructor() { }

}
