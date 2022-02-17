import { TestBed } from '@angular/core/testing';

import { CanActivateAdminGuardGuard } from './can-activate-admin-guard.guard';

describe('CanActivateAdminGuardGuard', () => {
  let guard: CanActivateAdminGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateAdminGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
