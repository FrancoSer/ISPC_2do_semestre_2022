import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProfesionalComponent } from './registro-profesional.component';

describe('RegistroProfesionalComponent', () => {
  let component: RegistroProfesionalComponent;
  let fixture: ComponentFixture<RegistroProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroProfesionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
