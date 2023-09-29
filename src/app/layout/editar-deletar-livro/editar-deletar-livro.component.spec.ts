import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDeletarLivroComponent } from './editar-deletar-livro.component';

describe('EditarDeletarLivroComponent', () => {
  let component: EditarDeletarLivroComponent;
  let fixture: ComponentFixture<EditarDeletarLivroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarDeletarLivroComponent]
    });
    fixture = TestBed.createComponent(EditarDeletarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
