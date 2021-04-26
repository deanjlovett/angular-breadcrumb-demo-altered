import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { School0101Component } from './school0101.component';

describe('School0101Component', () => {
  let component: School0101Component;
  let fixture: ComponentFixture<School0101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ School0101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(School0101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
