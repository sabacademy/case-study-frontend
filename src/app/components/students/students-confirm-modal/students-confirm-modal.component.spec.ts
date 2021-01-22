import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsConfirmModalComponent } from './students-confirm-modal.component';

describe('StudentsConfirmModalComponent', () => {
  let component: StudentsConfirmModalComponent;
  let fixture: ComponentFixture<StudentsConfirmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsConfirmModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
