/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlanPremiumComponent } from './plan-premium.component';

describe('PlanPremiumComponent', () => {
  let component: PlanPremiumComponent;
  let fixture: ComponentFixture<PlanPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
