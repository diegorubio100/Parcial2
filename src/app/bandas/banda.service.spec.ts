/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BandaService } from './banda.service';

describe('Service: Banda', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BandaService]
    });
  });

  it('should ...', inject([BandaService], (service: BandaService) => {
    expect(service).toBeTruthy();
  }));
});
