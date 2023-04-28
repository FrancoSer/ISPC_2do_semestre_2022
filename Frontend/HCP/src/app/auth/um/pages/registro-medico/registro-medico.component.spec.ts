import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMedicoComponent } from './registro-medico.component';

describe('RegistroMedicoComponent', () => {
  let component: RegistroMedicoComponent;
  let fixture: ComponentFixture<RegistroMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroMedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
