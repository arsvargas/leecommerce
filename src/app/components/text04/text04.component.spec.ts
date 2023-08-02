import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Text04Component } from './text04.component';

describe('Text04Component', () => {
  let component: Text04Component;
  let fixture: ComponentFixture<Text04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Text04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Text04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
