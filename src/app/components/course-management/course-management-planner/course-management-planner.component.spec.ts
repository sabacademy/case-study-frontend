import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseManagementPlannerComponent } from './course-management-planner.component';

describe('CourseManagementPlannerComponent', () => {
  let component: CourseManagementPlannerComponent;
  let fixture: ComponentFixture<CourseManagementPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseManagementPlannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseManagementPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
