import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseManagementModalComponent } from './course-management-modal.component';

describe('CourseManagementModalComponent', () => {
  let component: CourseManagementModalComponent;
  let fixture: ComponentFixture<CourseManagementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseManagementModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseManagementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
