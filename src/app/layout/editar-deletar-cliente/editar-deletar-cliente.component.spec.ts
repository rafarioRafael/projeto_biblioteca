import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDeletarClienteComponent } from './editar-deletar-cliente.component';

describe('EditarDeletarClienteComponent', () => {
  let component: EditarDeletarClienteComponent;
  let fixture: ComponentFixture<EditarDeletarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarDeletarClienteComponent]
    });
    fixture = TestBed.createComponent(EditarDeletarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
