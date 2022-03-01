import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLocateComponent } from './form-locate.component';

describe('FormLocateComponent', () => {
  let component: FormLocateComponent;
  let fixture: ComponentFixture<FormLocateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLocateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
