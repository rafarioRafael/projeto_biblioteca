import { Component } from '@angular/core';
import { AccountService } from '../shared/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;

  login = {
    username: '',
    password: ''
  }

  constructor(private accountService: AccountService, private router: Router) { }

  onSubmit() {
    const result = this.accountService.login(this.login)
    console.log(`Login efetuado: ${result}`);
    this.router.navigate(['']);
  }

}
