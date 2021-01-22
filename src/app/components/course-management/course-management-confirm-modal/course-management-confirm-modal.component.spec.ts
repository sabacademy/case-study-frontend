import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseManagementConfirmModalComponent } from './course-management-confirm-modal.component';

describe('CourseManagementConfirmModalComponent', () => {
  let component: CourseManagementConfirmModalComponent;
  let fixture: ComponentFixture<CourseManagementConfirmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseManagementConfirmModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseManagementConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
