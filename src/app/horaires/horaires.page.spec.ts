import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorairesPage } from './horaires.page';

describe('HorairesPage', () => {
  let component: HorairesPage;
  let fixture: ComponentFixture<HorairesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorairesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorairesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
