import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
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

logado(){
  let ok: boolean =false

  if(environment.token != ""){
    ok = true
  }
  return ok
}

getByIdUser(id: number): Observable<Usuario>{
return this.http.get<Usuario>(`https://blogpessoalguilhermeramos.herokuapp.com/usuarios/${id}` )
}

}


