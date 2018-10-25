import { TestBed } from '@angular/core/testing';

import { BaseDatosService } from './base-datos.service';

describe('BaseDatosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseDatosService = TestBed.get(BaseDatosService);
    expect(service).toBeTruthy();
  });
});
