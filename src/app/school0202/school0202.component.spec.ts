import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { School0202Component } from './school0202.component';

describe('School0202Component', () => {
  let component: School0202Component;
  let fixture: ComponentFixture<School0202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ School0202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(School0202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
