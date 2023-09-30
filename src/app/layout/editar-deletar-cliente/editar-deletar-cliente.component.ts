import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-deletar-cliente',
  templateUrl: './editar-deletar-cliente.component.html',
  styleUrls: ['./editar-deletar-cliente.component.scss']
})
export class EditarDeletarClienteComponent {


  constructor(public dialogRef: MatDialogRef<EditarDeletarClienteComponent>) {
    
  }

  cancelar() {
    this.dialogRef.close();
  }
}
