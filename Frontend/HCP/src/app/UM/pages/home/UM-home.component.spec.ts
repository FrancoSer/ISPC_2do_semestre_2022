/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UMHomeComponent } from './UM-home.component';

describe('UMHomeComponent', () => {
  let component: UMHomeComponent;
  let fixture: ComponentFixture<UMHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UMHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UMHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
