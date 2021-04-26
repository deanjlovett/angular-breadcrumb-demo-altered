import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class020202Component } from './class020202.component';

describe('Class020202Component', () => {
  let component: Class020202Component;
  let fixture: ComponentFixture<Class020202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class020202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class020202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
