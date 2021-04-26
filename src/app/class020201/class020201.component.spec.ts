import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class020201Component } from './class020201.component';

describe('Class020201Component', () => {
  let component: Class020201Component;
  let fixture: ComponentFixture<Class020201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class020201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class020201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
