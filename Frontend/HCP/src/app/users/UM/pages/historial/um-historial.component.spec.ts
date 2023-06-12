import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UMHistorialComponent } from './UM-historial.component';

describe('UmHistorialComponent', () => {
  let component: UMHistorialComponent;
  let fixture: ComponentFixture<UMHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UMHistorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UMHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
