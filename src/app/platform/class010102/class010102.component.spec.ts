import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class010102Component } from './class010102.component';

describe('Class010102Component', () => {
  let component: Class010102Component;
  let fixture: ComponentFixture<Class010102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class010102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class010102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
