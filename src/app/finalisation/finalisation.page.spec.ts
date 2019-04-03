import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalisationPage } from './finalisation.page';

describe('FinalisationPage', () => {
  let component: FinalisationPage;
  let fixture: ComponentFixture<FinalisationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalisationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
