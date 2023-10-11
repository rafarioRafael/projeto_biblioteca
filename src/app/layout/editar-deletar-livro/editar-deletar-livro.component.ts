import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LivroService } from 'src/app/services/livro.service';
import { Livro } from '../interfaces/livro';

@Component({
  selector: 'app-editar-deletar-livro',
  templateUrl: './editar-deletar-livro.component.html',
  styleUrls: ['./editar-deletar-livro.component.scss']
})
export class EditarDeletarLivroComponent {
  form: FormGroup;
  maxDate: Date;
  loading: boolean = false;
  operacao: string = 'Adicionar ';
  id: number | undefined;

  constructor(public dialogRef: MatDialogRef<EditarDeletarLivroComponent>,
    private fb: FormBuilder, private _livroService: LivroService, private _snackBar: MatSnackBar,
    private dateAdapter: DateAdapter<any>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.maxDate = new Date();

    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.maxLength(20)]],
      autor: ['', [Validators.required, Validators.maxLength(20)]],
      editora: ['', Validators.required],
      categoria: ['', [Validators.required, Validators.maxLength(60)]],
      anoPublicacao: [null, Validators.required],
      alugadoPor: ['', Validators.required]
    })
    this.id = data.id
    this.dateAdapter.setLocale('pt-br')
  }

  ngOnInit(): void {
    this.eEditavel(this.id)
  }

  eEditavel(id: number | undefined) {
    if(id !== undefined) {
      this.operacao = 'Editar ';
      this.getLivro(id)
    }
  }

  getLivro(id: number) {
    this._livroService.getLivro(id).subscribe(data => {
      this.form.patchValue({
        titulo: data.titulo,
        autor: data.autor,
        editora: data.editora,
        categoria: data.categoria,
        ano_publicacao: new Date(data.anoPublicacao),
        alugadoPor: data.alugadoPor
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

    const livro: Livro = {
      titulo: this.form.value.titulo,
      autor: this.form.value.autor,
      editora: this.form.value.editora,
      categoria: this.form.value.categoria,
      anoPublicacao: this.form.value.anoPublicacao.toISOString().slice(0, 10),
      isbn: this.form.value.isbn,
      statusLivro: this.form.value.statusLivro,
      alugadoPor: this.form.value.alugadoPor
    }
    this.loading = true;

    if(this.id === undefined) {
      //Adicionar livro
      this._livroService.addLivro(livro).subscribe(() => {
        this.dialogRef.close(true)
      })
    } else {
      //Editar livro
      this._livroService.updateLivro(this.id, livro).subscribe(data => {
        this.openSnackBar('editado')
      })
    }
    this.loading = false;
    this.dialogRef.close(true);

    
  }

  openSnackBar(operacao: string) {
    this._snackBar.open(`Livro ${operacao}(a)`, '', {
      duration: 2000
    });
  }
}