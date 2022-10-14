import { TestBed } from '@angular/core/testing';

import { UsuariobdService } from './usuariobd.service';

describe('UsuariobdService', () => {
  let service: UsuariobdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariobdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
