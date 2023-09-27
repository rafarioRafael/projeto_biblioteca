import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './account/login/login.component';
import { AboutComponent } from './layout/about/about.component';
import { ListaClienteComponent } from './layout/lista-cliente/lista-cliente.component';


const routes: Routes = [
  {
    path: '',

    children:
    [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'about', component: AboutComponent},
      { path: 'clientes', component: ListaClienteComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
