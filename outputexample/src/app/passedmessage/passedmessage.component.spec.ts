import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassedmessageComponent } from './passedmessage.component';

describe('PassedmessageComponent', () => {
  let component: PassedmessageComponent;
  let fixture: ComponentFixture<PassedmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassedmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassedmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
