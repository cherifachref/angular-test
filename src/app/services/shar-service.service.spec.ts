import { TestBed } from '@angular/core/testing';

import { SharServiceService } from './shar-service.service';

describe('SharServiceService', () => {
  let service: SharServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
