import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MygridoutputexampleComponent } from './mygridoutputexample.component';

describe('MygridoutputexampleComponent', () => {
  let component: MygridoutputexampleComponent;
  let fixture: ComponentFixture<MygridoutputexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MygridoutputexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MygridoutputexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
