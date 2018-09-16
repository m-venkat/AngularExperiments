import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainworkerComponent } from './plainworker.component';

describe('PlainworkerComponent', () => {
  let component: PlainworkerComponent;
  let fixture: ComponentFixture<PlainworkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainworkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
