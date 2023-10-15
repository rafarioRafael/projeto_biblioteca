import { Component, ViewChild } from '@angular/core';
import { Estoque } from '../interfaces/estoque';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { EstoqueService } from 'src/app/services/estoque.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddEstoqueLivroComponent } from '../add-estoque-livro/add-estoque-livro.component';

@Component({
  selector: 'app-estoque-livro',
  templateUrl: './estoque-livro.component.html',
  styleUrls: ['./estoque-livro.component.scss']
})
export class EstoqueLivroComponent {
  displayedColumns: string[] = ['titulo', 'autor', 'editora', 'genero', 'isbn', 'ano_publicacao', 'qtd',  'acao'];
  dataSource: MatTableDataSource<Estoque>;
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private _estoqueService: EstoqueService, private _snackBar: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.obterEstoques();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  

  obterEstoques() {
    this.loading = true;
    this._estoqueService.getEstoques().subscribe(data => {
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


  //add estoque e editar

  addEditarEstoque(id?: number) {
    const dialogRef = this.dialog.open(AddEstoqueLivroComponent, {
      width: '550px',
      disableClose: true,
      data: { id: id }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.obterEstoques();
      }
    });
  }

  deletarEstoque(id: number) {
    this.loading = true;
    this._estoqueService.deleteEstoque(id).subscribe(() => {
      this.obterEstoques();
      this.openSnackBar();
    })
  }

  openSnackBar() {
    this._snackBar.open('Livro excluido(a)', '', {
      duration: 2000
    });
  }
}
