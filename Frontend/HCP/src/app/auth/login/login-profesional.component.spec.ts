import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginProfesionalComponent } from './login-profesional.component';

describe('LoginProfesionalComponent', () => {
  let component: LoginProfesionalComponent;
  let fixture: ComponentFixture<LoginProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginProfesionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
