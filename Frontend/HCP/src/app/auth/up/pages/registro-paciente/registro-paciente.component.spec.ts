import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPacienteComponent } from './registro-paciente.component';

describe('RegistroPacienteComponent', () => {
  let component: RegistroPacienteComponent;
  let fixture: ComponentFixture<RegistroPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
