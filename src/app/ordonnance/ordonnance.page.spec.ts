import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdonnancePage } from './ordonnance.page';

describe('OrdonnancePage', () => {
  let component: OrdonnancePage;
  let fixture: ComponentFixture<OrdonnancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdonnancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdonnancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
