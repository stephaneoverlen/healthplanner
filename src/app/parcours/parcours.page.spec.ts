import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursPage } from './parcours.page';

describe('ParcoursPage', () => {
  let component: ParcoursPage;
  let fixture: ComponentFixture<ParcoursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcoursPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
