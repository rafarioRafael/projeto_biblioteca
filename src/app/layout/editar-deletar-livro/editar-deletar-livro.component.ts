import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LivroService } from 'src/app/services/livro.service';
import { Livro } from '../interfaces/livro';
import { format } from 'date-fns';
import { addDays } from 'date-fns';

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
  isDisabled: boolean = true;
  titulos: any[] = [];
  alugadosPor: any[] = [];
  //desativar data

  constructor(public dialogRef: MatDialogRef<EditarDeletarLivroComponent>,
    private fb: FormBuilder, private _livroService: LivroService, private _snackBar: MatSnackBar,
    private dateAdapter: DateAdapter<any>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.maxDate = new Date();

    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.maxLength(20)]],
      autor: ['', [Validators.required, Validators.maxLength(20)]],
      editora: ['', Validators.required],
      categoria: ['', [Validators.required, Validators.maxLength(60)]],
      isbn: ['1', Validators.required],
      data_inicial: [new Date(), Validators.required],
      data_final: [addDays(new Date(), 30), Validators.required],
      alugadoPor: ['', Validators.required]
      //addDays(new Date(), 30)
    })
    this.id = data.id
    this.dateAdapter.setLocale('pt-br');
  }

  ngOnInit(): void {
    this.eEditavel(this.id)
    this._livroService.getTitulos().subscribe((data: any) => {
      this.titulos = data;
      console.log(this.titulos)
    });
    this._livroService.getNomes().subscribe((data: any) => {
      this.alugadosPor = data;
      console.log(this.alugadosPor)
    });
  }

  eEditavel(id: number | undefined) {
    if (id !== undefined) {
      this.operacao = 'Editar ';
      this.getLivro(id)
    }
  }

  getLivro(id: number) {
    this._livroService.getLivro(id).subscribe(data => {
      // const data_inicial = format(new Date(data.data_inicial), 'dd/MM/yyyy');
      // const data_final = format(new Date(data.data_final), 'dd/MM/yyyy');
      const data_inicial = new Date(data.data_inicial);
      const data_final = new Date(data.data_final);
      this.form.patchValue({
        titulo: data.titulo,
        alugadoPor: data.alugadoPor,
        data_inicial: data_inicial,
        data_final: data_final
      })
    })
  }
  

  cancelar() {
    this.dialogRef.close(false);
  }

  addEditarLivro() {

    // if (this.form.invalid) {
    //   return;
    // }

    const livro: Livro = {
      titulo: this.form.value.titulo,
      alugadoPor: this.form.value.alugadoPor,
      data_inicial: this.form.value.data_inicial.toISOString().slice(0, 10),
      data_final: this.form.value.data_final.toISOString().slice(0, 10),
      // data_inicial: this.form.value.data_inicial ? this.form.value.data_inicial.toISOString().slice(0, 10) : null,
      // data_final: this.form.value.data_final ? this.form.value.data_final.toISOString().slice(0, 10) : null,

    }
    console.log(livro.data_inicial)
    console.log(livro.data_final)
    this.loading = true;

    if (this.id === undefined) {
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