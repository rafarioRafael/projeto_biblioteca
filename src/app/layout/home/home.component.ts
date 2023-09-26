import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/shared/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private router: Router,
    private accountService: AccountService
  ) { }

    ngOnInit(): void{
      const token = window.localStorage.getItem('token');
      if (!token){
        this.router.navigate(['/login'])
      }
    }

    fazerLogout(){
      const result = this.accountService.logout();
      console.log(`Log-out efetuado: ${result}`);
    }
}
