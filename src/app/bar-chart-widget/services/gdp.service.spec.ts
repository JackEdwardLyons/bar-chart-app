import { TestBed, inject } from '@angular/core/testing';

import { GDPService } from './gdp.service';

describe('GDPService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GDPService]
    });
  });

  it('should ...', inject([GDPService], (service: GDPService) => {
    expect(service).toBeTruthy();
  }));
});
