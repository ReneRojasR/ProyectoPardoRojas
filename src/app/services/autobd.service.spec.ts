import { TestBed } from '@angular/core/testing';

import { AutobdService } from './autobd.service';

describe('AutobdService', () => {
  let service: AutobdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutobdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
