import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LonrunningproblemComponent } from './lonrunningproblem.component';

describe('LonrunningproblemComponent', () => {
  let component: LonrunningproblemComponent;
  let fixture: ComponentFixture<LonrunningproblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LonrunningproblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LonrunningproblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
