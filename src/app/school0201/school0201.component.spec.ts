import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { School0201Component } from './school0201.component';

describe('School0201Component', () => {
  let component: School0201Component;
  let fixture: ComponentFixture<School0201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ School0201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(School0201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
