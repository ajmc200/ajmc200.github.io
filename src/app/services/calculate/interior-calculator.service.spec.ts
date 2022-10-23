import { TestBed } from '@angular/core/testing';

import { InteriorCalculatorService } from './interior-calculator.service';

describe('InteriorCalculatorService', () => {
  let service: InteriorCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteriorCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
