import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentbodyComponent } from './studentbody.component';

describe('StudentbodyComponent', () => {
  let component: StudentbodyComponent;
  let fixture: ComponentFixture<StudentbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
