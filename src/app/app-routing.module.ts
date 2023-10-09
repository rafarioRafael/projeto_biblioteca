import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './account/login/login.component';
import { ListaClienteComponent } from './layout/lista-cliente/lista-cliente.component';
import { ListaLivroComponent } from './layout/lista-livro/lista-livro.component';
import { SettingsComponent } from './layout/settings/settings.component';


const routes: Routes = [
  {
    path: '',

    children:
    [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'clientes', component: ListaClienteComponent},
      { path: 'livros', component: ListaLivroComponent},
      { path: 'settings', component: SettingsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
