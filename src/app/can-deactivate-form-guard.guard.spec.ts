import { TestBed } from '@angular/core/testing';

import { CanDeactivateFormGuardGuard } from './can-deactivate-form-guard.guard';

describe('CanDeactivateFormGuardGuard', () => {
  let guard: CanDeactivateFormGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivateFormGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
