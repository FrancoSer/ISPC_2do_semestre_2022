/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UPLoginComponent } from './UP-login.component';

describe('UPLoginComponent', () => {
  let component: UPLoginComponent;
  let fixture: ComponentFixture<UPLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UPLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UPLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
