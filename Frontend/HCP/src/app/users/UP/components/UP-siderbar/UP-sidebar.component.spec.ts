import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UPSidebarComponent } from './UP-sidebar.component';

describe( 'UPSiderbarComponent', () =>
{
  let component: UPSidebarComponent;
  let fixture: ComponentFixture<UPSidebarComponent>;

  beforeEach( async () =>
  {
    await TestBed.configureTestingModule( {
      declarations: [ UPSidebarComponent ]
    } )
      .compileComponents();

    fixture = TestBed.createComponent( UPSidebarComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () =>
  {
    expect( component ).toBeTruthy();
  } );
} );
