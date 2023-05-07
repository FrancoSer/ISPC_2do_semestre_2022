import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UMAgendaComponent } from './um-agenda.component';

describe('UMAgendaComponent', () => {
  let component: UMAgendaComponent;
  let fixture: ComponentFixture<UMAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UMAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UMAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
