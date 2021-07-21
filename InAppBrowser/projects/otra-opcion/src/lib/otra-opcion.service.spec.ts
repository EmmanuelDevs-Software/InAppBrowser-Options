import { TestBed } from '@angular/core/testing';

import { OtraOpcionService } from './otra-opcion.service';

describe('OtraOpcionService', () => {
  let service: OtraOpcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtraOpcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
