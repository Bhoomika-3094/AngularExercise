import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomexampleComponent } from './domexample.component';

describe('DomexampleComponent', () => {
  let component: DomexampleComponent;
  let fixture: ComponentFixture<DomexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
