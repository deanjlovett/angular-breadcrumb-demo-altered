import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class020102Component } from './class020102.component';

describe('Class020102Component', () => {
  let component: Class020102Component;
  let fixture: ComponentFixture<Class020102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class020102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class020102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
