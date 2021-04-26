import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class010201Component } from './class010201.component';

describe('Class010201Component', () => {
  let component: Class010201Component;
  let fixture: ComponentFixture<Class010201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class010201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class010201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
