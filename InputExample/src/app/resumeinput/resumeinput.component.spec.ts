import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeinputComponent } from './resumeinput.component';

describe('ResumeinputComponent', () => {
  let component: ResumeinputComponent;
  let fixture: ComponentFixture<ResumeinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
