import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpatientphonenumberPage } from './getpatientphonenumber.page';

describe('GetpatientphonenumberPage', () => {
  let component: GetpatientphonenumberPage;
  let fixture: ComponentFixture<GetpatientphonenumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetpatientphonenumberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpatientphonenumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
