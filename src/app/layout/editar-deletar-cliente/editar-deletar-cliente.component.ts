import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cliente } from '../interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-editar-deletar-cliente',
  templateUrl: './editar-deletar-cliente.component.html',
  styleUrls: ['./editar-deletar-cliente.component.scss']
})
export class EditarDeletarClienteComponent {
  form: FormGroup;
  maxDate: Date;
  loading: boolean = false;
  operacao: string = 'Adicionar ';
  id: number | undefined;

  constructor(public dialogRef: MatDialogRef<EditarDeletarClienteComponent>,
    private fb: FormBuilder, private _clienteService: ClienteService, private _snackBar: MatSnackBar,
    private dateAdapter: DateAdapter<any>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.maxDate = new Date();

    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(20)]],
      sobrenome: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      endereco: ['', [Validators.required, Validators.maxLength(60)]],
      dataNascimento: [null, Validators.required]
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
      this.getCliente(id)
    }
  }

  getCliente(id: number) {
    this._clienteService.getCliente(id).subscribe(data => {
      this.form.patchValue({
        nome: data.nome,
        sobrenome: data.sobrenome,
        email: data.email,
        endereco: data.endereco,
        dataNascimento: new Date(data.dataNascimento)
      })
    })
  }

  cancelar() {
    this.dialogRef.close(false);
  }

  addEditarCliente() {

    if (this.form.invalid) {
      return;
    }

    const cliente: Cliente = {
      nome: this.form.value.nome,
      sobrenome: this.form.value.sobrenome,
      email: this.form.value.email,
      endereco: this.form.value.endereco,
      dataNascimento: this.form.value.dataNascimento.toISOString().slice(0, 10)
    }
    this.loading = true;

    if(this.id === undefined) {
      //Adicionar cliente
      this._clienteService.addCliente(cliente).subscribe(() => {
        this.dialogRef.close(true)
      })
    } else {
      //Editar cliente
      this._clienteService.updateCliente(this.id, cliente).subscribe(data => {
        this.openSnackBar('editado')
      })
    }
    this.loading = false;
    this.dialogRef.close(true);

    
  }

  openSnackBar(operacao: string) {
    this._snackBar.open(`Cliente ${operacao}(a)`, '', {
      duration: 2000

    });
  }
}
