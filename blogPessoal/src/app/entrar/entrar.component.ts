import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin


  constructor(
    private authService: AuthService,
    private router: Router


  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  entrar() {




    this.authService.login(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp

      environment.id = this.userLogin.id
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto
      environment.token = this.userLogin.token



      this.router.navigate(["/inicio"])
    }, erro => {
      if (erro.status == 401) {
        alert("Usuario ou senha invalidos!")
      }
    })
  }



}
