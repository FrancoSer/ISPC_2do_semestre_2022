import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UPHeaderComponent } from './UP-header.component';

describe('UPHeaderComponent', () => {
  let component: UPHeaderComponent;
  let fixture: ComponentFixture<UPHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UPHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UPHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
