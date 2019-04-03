import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticienPage } from './praticien.page';

describe('PraticienPage', () => {
  let component: PraticienPage;
  let fixture: ComponentFixture<PraticienPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraticienPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticienPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
