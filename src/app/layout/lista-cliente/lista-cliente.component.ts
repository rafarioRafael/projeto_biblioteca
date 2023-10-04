import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { EditarDeletarClienteComponent } from '../editar-deletar-cliente/editar-deletar-cliente.component';
import { MatDialog } from '@angular/material/dialog';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent implements AfterViewInit {
  displayedColumns: string[] = ['nome', 'sobrenome', 'email', 'endereco', 'dataNascimento', 'acao'];
  dataSource: MatTableDataSource<Cliente>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private _clienteService: ClienteService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.obterClientes();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  obterClientes() {
    this._clienteService.getClientes().subscribe(data => {
      console.log(data);
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
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
