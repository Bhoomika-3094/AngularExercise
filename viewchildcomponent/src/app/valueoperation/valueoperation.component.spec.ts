import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueoperationComponent } from './valueoperation.component';

describe('ValueoperationComponent', () => {
  let component: ValueoperationComponent;
  let fixture: ComponentFixture<ValueoperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueoperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
