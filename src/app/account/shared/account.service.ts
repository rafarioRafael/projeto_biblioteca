import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private router: Router) { }

  login(user: any) {
    return new Promise((resolve) => {
      const token = window.localStorage.getItem('token');
      if (user.username == 'oi' && user.password == 'oi123') {
        if (!token) {
          window.localStorage.setItem('token', 'meu-token');
          this.router.navigate(['/login']);
          return false;
        } else {
          this.router.navigate(['']);
          alert("Login feito")
          return true;
        }
      } else {
        alert("Usuário ou senha incorretos");
        if (localStorage.getItem('token')) {
          localStorage.removeItem('token');
        } else {
          this.router.navigate(['/login']);
        }
        return false;
      }
    });
  }
  logout(){
    if (localStorage.getItem('token')){
      localStorage.removeItem('token')
      location.reload();
    }
  }
}
