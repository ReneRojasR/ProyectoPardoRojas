import { TestBed } from '@angular/core/testing';

import { AppbdService } from './appbd.service';

describe('AppbdService', () => {
  let service: AppbdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppbdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
