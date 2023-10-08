import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Cliente } from '../interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-editar-deletar-cliente',
  templateUrl: './editar-deletar-cliente.component.html',
  styleUrls: ['./editar-deletar-cliente.component.scss']
})
export class EditarDeletarClienteComponent {
  form: FormGroup;
  maxDate: Date;

  constructor(public dialogRef: MatDialogRef<EditarDeletarClienteComponent>,
    private fb: FormBuilder, private _clienteService: ClienteService) {
    this.maxDate = new Date();

    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(20)]],
      sobrenome: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      endereco: ['', [Validators.required, Validators.maxLength(60)]],
      dataNascimento: [null, Validators.required]
    })
  }

  cancelar() {
    this.dialogRef.close();
  }

  addEditarCliente() {

    if(this.form.invalid) {
      return;
    }

    const cliente: Cliente = {
      nome: this.form.value.nome,
      sobrenome: this.form.value.sobrenome,
      email: this.form.value.email,
      endereco: this.form.value.endereco,
      dataNascimento: this.form.value.dataNascimento.toISOString().slice(0,10)
    }

    this._clienteService.addCliente(cliente).subscribe(() => {
      console.log('cliente adicionado')
    })
  }
}
