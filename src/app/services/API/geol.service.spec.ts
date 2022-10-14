import { TestBed } from '@angular/core/testing';

import { GeolService } from './geol.service';

describe('GeolService', () => {
  let service: GeolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
