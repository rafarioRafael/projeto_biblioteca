import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
//Componentes criados
import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { ListaClienteComponent } from './layout/lista-cliente/lista-cliente.component';
import { EditarDeletarClienteComponent } from './layout/editar-deletar-cliente/editar-deletar-cliente.component';
import { ListaLivroComponent } from './layout/lista-livro/lista-livro.component';
import { EditarDeletarLivroComponent } from './layout/editar-deletar-livro/editar-deletar-livro.component';





//Modulos
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListaClienteComponent,
    EditarDeletarClienteComponent,
    ListaLivroComponent,
    EditarDeletarLivroComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
