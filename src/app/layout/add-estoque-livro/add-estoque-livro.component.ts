import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EstoqueService } from 'src/app/services/estoque.service';
import { Estoque } from '../interfaces/estoque';

@Component({
  selector: 'app-add-estoque-livro',
  templateUrl: './add-estoque-livro.component.html',
  styleUrls: ['./add-estoque-livro.component.scss']
})
export class AddEstoqueLivroComponent {
  form: FormGroup;
  loading: boolean = false;
  operacao: string = 'Adicionar ';
  id: number | undefined;
  isDisabled: boolean = true;

  constructor(public dialogRef: MatDialogRef<AddEstoqueLivroComponent>,
    private fb: FormBuilder, private _estoqueService: EstoqueService, private _snackBar: MatSnackBar, 
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.maxLength(200)]],
      autor: ['', [Validators.required, Validators.maxLength(200)]],
      editora: ['', [Validators.required, Validators.maxLength(200)]],
      genero: ['', [Validators.required, Validators.maxLength(600)]],
      isbn: ['1', Validators.required],
      ano_publicacao: [null, [Validators.required, Validators.maxLength(4)]],
      //qtd: ['', Validators.required]
    })
    this.id = data.id
  }

  ngOnInit(): void {
    this.eEditavel(this.id)
  }

  eEditavel(id: number | undefined) {
    if(id !== undefined) {
      this.operacao = 'Editar ';
      this.getEstoque(id)
    }
  }

  getEstoque(id: number) {
    this._estoqueService.getEstoque(id).subscribe(data => {
      this.form.patchValue({
        titulo: data.titulo,
        autor: data.autor,
        editora: data.editora,
        genero: data.genero,
        isbn: data.isbn,
        ano_publicacao: data.ano_publicacao,
        //qtd: data.qtd
      })
    })
  }

  cancelar() {
    this.dialogRef.close(false);
  }

  addEditarLivro() {

    if (this.form.invalid) {
      return;
    }

    const estoque: Estoque = {
      titulo: this.form.value.titulo,
      autor: this.form.value.autor,
      editora: this.form.value.editora,
      genero: this.form.value.genero,
      isbn: this.form.value.isbn,
      ano_publicacao: this.form.value.ano_publicacao,
      //qtd: this.form.value.qtd
    }
    this.loading = true;

    if(this.id === undefined) {
      //Adicionar estoque
      this._estoqueService.addEstoque(estoque).subscribe(() => {
        this.dialogRef.close(true)
      })
    } else {
      //Editar estoque
      this._estoqueService.updateEstoque(this.id, estoque).subscribe(data => {
        this.openSnackBar('editado')
      })
    }
    this.loading = false;
    this.dialogRef.close(true);

    
  }
  generos: any[] = [
    {value: '1', viewValue: 'Terror'},
    {value: '2', viewValue: 'Fantasia'},
    {value: '3', viewValue: 'Ficção-Científica'},
    {value: '4', viewValue: 'Ação e aventura'},
    {value: '5', viewValue: 'Ficção-Policial'},
    {value: '6', viewValue: 'Thriller e suspense'},
    {value: '7', viewValue: 'Romance'},
    {value: '8', viewValue: 'Novela'},
    {value: '9', viewValue: 'Graphic novel'},
    {value: '10', viewValue: 'Conto'},
    {value: '11', viewValue: 'Young adult'},
    {value: '12', viewValue: 'New adult'},
    {value: '13', viewValue: 'Infantil'},
    {value: '14', viewValue: 'Biografia'},
  ];

  openSnackBar(operacao: string) {
    this._snackBar.open(`Livro ${operacao}(a)`, '', {
      duration: 2000
    });
  }
}
