import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class020101Component } from './class020101.component';

describe('Class020101Component', () => {
  let component: Class020101Component;
  let fixture: ComponentFixture<Class020101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class020101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class020101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
