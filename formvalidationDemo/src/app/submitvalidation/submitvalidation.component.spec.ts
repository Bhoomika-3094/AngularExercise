import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitvalidationComponent } from './submitvalidation.component';

describe('SubmitvalidationComponent', () => {
  let component: SubmitvalidationComponent;
  let fixture: ComponentFixture<SubmitvalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitvalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
