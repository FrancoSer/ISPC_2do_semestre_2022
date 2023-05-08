/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UPHomeComponent } from './UP-home.component';

describe('UPHomeComponent', () => {
  let component: UPHomeComponent;
  let fixture: ComponentFixture<UPHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UPHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UPHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
