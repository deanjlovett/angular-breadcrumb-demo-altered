import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { School0102Component } from './school0102.component';

describe('School0102Component', () => {
  let component: School0102Component;
  let fixture: ComponentFixture<School0102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ School0102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(School0102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
