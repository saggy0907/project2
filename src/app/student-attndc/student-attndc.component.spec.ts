import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAttndcComponent } from './student-attndc.component';

describe('StudentAttndcComponent', () => {
  let component: StudentAttndcComponent;
  let fixture: ComponentFixture<StudentAttndcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAttndcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAttndcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
