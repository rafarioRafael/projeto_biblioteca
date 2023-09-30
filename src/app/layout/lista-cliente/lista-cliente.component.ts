import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { EditarDeletarClienteComponent } from '../editar-deletar-cliente/editar-deletar-cliente.component';
import { MatDialog } from '@angular/material/dialog';

const listaClientes: Cliente[] = [
  { nome: "Rafael", sobrenome: "Miranda", email: "rafaelm@gmail.com", dataNascimento: new Date() },
  { nome: "Nem", sobrenome: "Te conto", email: "rnemteconto123@gmail.com", dataNascimento: new Date() },
  { nome: "Joao", sobrenome: "Sei la", email: "joaozinho@gmail.com", dataNascimento: new Date() },
  { nome: "Lata", sobrenome: "Te Cbom", email: "rnemteconto123@gmail.com", dataNascimento: new Date() },
  { nome: "Rafael", sobrenome: "Miranda", email: "lata321@gmail.com", dataNascimento: new Date() },
  { nome: "sabrina", sobrenome: "sei lá", email: "sabrina.123@gmail.com", dataNascimento: new Date() },
  { nome: "Marcela", sobrenome: "sei lá também", email: "oitudobem!!!@gmail.com", dataNascimento: new Date() },
  { nome: "Nem", sobrenome: "Te conto", email: "nemtecontodenovo1232020@gmail.com", dataNascimento: new Date() },

];

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent implements AfterViewInit{
  displayedColumns: string[] = ['nome', 'sobrenome', 'email', 'dataNascimento', 'acao'];
  dataSource: MatTableDataSource<Cliente>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(listaClientes);
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addEditarCliente() {
    const dialogRef = this.dialog.open(EditarDeletarClienteComponent, {
      width: '550px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
