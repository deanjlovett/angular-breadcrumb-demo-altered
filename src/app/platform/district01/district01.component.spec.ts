import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { District01Component } from './district01.component';

describe('District01Component', () => {
  let component: District01Component;
  let fixture: ComponentFixture<District01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ District01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(District01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
