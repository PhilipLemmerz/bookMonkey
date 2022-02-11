import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormNewBookComponent } from './reactive-form-new-book.component';

describe('ReactiveFormNewBookComponent', () => {
  let component: ReactiveFormNewBookComponent;
  let fixture: ComponentFixture<ReactiveFormNewBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormNewBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormNewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
