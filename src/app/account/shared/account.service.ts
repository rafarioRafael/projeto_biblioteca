import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private router: Router, private _snackBar: MatSnackBar) { }

  login(user: any) {
    return new Promise((resolve) => {
      const token = window.localStorage.getItem('token');
      if (user.username == 'rafaeleamigos' && user.password == 'oi123') {
        if (!token) {
          window.localStorage.setItem('token', 'meu-token');
          this.router.navigate(['/login']);
          return false;
        } else {
          this.router.navigate(['']);
          return true;
        }
      } else {
        this.openSnackBar();
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
  openSnackBar() {
    this._snackBar.open('Usuário ou senha incorretos', 'Tentar novamente', {
      duration: 2000

    });
  }
}
