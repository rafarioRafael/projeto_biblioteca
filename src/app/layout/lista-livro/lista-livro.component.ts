import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Livro } from '../interfaces/livro';
import { LivroService } from 'src/app/services/livro.service';
import { EditarDeletarLivroComponent } from '../editar-deletar-livro/editar-deletar-livro.component';

@Component({
  selector: 'app-lista-livro',
  templateUrl: './lista-livro.component.html',
  styleUrls: ['./lista-livro.component.scss']
})
export class ListaLivroComponent {
  displayedColumns: string[] = ['titulo', 'alugadoPor', 'data_inicial', 'data_final', 'acao'];
  dataSource: MatTableDataSource<Livro>;
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private _livroService: LivroService, private _snackBar: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.obterLivros();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  

  obterLivros() {
    this.loading = true;
    this._livroService.getLivros().subscribe(data => {
      this.loading = false;
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

  addEditarLivro(id?: number) {
    const dialogRef = this.dialog.open(EditarDeletarLivroComponent, {
      width: '550px',
      disableClose: true,
      data: { id: id }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.obterLivros();
      }
    });
  }

  deletarLivro(id: number) {
    this.loading = true;
    this._livroService.deleteLivro(id).subscribe(() => {
      this.obterLivros();
      this.openSnackBar();
    })
  }

  openSnackBar() {
    this._snackBar.open('Livro excluido(a)', '', {
      duration: 2000

    });
  }

  atribuirLivro(idLivro: number, idPessoa: number) {
    this.loading = true;
    this._livroService.atribuirLivro(idLivro, idPessoa).subscribe(() => {
      this.obterLivros(); // Atualize a lista de livros após a atribuição.
      //this.openSnackBar();
    });
  }

}
