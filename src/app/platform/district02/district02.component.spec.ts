import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { District02Component } from './district02.component';

describe('District02Component', () => {
  let component: District02Component;
  let fixture: ComponentFixture<District02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ District02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(District02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
