import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedmessageComponent } from './failedmessage.component';

describe('FailedmessageComponent', () => {
  let component: FailedmessageComponent;
  let fixture: ComponentFixture<FailedmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
