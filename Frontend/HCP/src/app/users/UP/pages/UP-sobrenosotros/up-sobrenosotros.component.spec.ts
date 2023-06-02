import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UPSobrenosotrosComponent } from './up-sobrenosotros.component';

describe('UPSobrenosotrosComponent', () => {
  let component: UPSobrenosotrosComponent;
  let fixture: ComponentFixture<UPSobrenosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UPSobrenosotrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UPSobrenosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
