import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementConfirmModalComponent } from './user-management-confirm-modal.component';

describe('UserManagementConfirmModalComponent', () => {
  let component: UserManagementConfirmModalComponent;
  let fixture: ComponentFixture<UserManagementConfirmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagementConfirmModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
