import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentGpaComponent } from './view-student-gpa.component';

describe('ViewStudentGpaComponent', () => {
  let component: ViewStudentGpaComponent;
  let fixture: ComponentFixture<ViewStudentGpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStudentGpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentGpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
