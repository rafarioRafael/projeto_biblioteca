import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstoqueLivroComponent } from './add-estoque-livro.component';

describe('AddEstoqueLivroComponent', () => {
  let component: AddEstoqueLivroComponent;
  let fixture: ComponentFixture<AddEstoqueLivroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEstoqueLivroComponent]
    });
    fixture = TestBed.createComponent(AddEstoqueLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
