import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarContendComponent } from './menu-bar-contend.component';

describe('MenuBarContendComponent', () => {
  let component: MenuBarContendComponent;
  let fixture: ComponentFixture<MenuBarContendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBarContendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarContendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
