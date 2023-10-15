import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueLivroComponent } from './estoque-livro.component';

describe('EstoqueLivroComponent', () => {
  let component: EstoqueLivroComponent;
  let fixture: ComponentFixture<EstoqueLivroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstoqueLivroComponent]
    });
    fixture = TestBed.createComponent(EstoqueLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
