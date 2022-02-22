import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(

    private http: HttpClient
  ) {}

login(UserLogin:UserLogin): Observable<UserLogin> {
return this.http.post<UserLogin>("https://blogpessoalguilhermeramos.herokuapp.com/usuarios/logar" , UserLogin)
}

cadastrar(usuario:Usuario): Observable<Usuario>{

  return this.http.post<Usuario>("https://blogpessoalguilhermeramos.herokuapp.com/usuarios/cadastrar",usuario)

}


}


