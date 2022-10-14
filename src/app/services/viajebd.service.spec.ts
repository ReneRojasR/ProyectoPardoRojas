import { TestBed } from '@angular/core/testing';

import { ViajebdService } from './viajebd.service';

describe('ViajebdService', () => {
  let service: ViajebdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajebdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
