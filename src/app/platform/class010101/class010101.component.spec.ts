import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class010101Component } from './class010101.component';

describe('Class010101Component', () => {
  let component: Class010101Component;
  let fixture: ComponentFixture<Class010101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class010101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class010101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
