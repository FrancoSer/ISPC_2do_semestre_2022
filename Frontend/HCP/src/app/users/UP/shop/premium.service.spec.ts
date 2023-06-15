/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PremiumService } from './premium.service';

describe('Service: Premium', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PremiumService]
    });
  });

  it('should ...', inject([PremiumService], (service: PremiumService) => {
    expect(service).toBeTruthy();
  }));
});
