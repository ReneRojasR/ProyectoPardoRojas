import { TestBed } from '@angular/core/testing';

import { ComunabdService } from './comunabd.service';

describe('ComunabdService', () => {
  let service: ComunabdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunabdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
