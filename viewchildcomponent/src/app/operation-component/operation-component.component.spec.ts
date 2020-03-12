import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationComponentComponent } from './operation-component.component';

describe('OperationComponentComponent', () => {
  let component: OperationComponentComponent;
  let fixture: ComponentFixture<OperationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
