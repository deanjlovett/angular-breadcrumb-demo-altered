import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class010202Component } from './class010202.component';

describe('Class010202Component', () => {
  let component: Class010202Component;
  let fixture: ComponentFixture<Class010202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class010202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class010202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
