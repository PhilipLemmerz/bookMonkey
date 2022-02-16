import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewBookComponent } from './form-new-book.component';

describe('FormNewBookComponent', () => {
  let component: FormNewBookComponent;
  let fixture: ComponentFixture<FormNewBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
