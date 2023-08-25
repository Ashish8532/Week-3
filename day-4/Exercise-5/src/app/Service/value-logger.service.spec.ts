import { TestBed } from '@angular/core/testing';

import { ValueLoggerService } from './value-logger.service';

describe('ValueLoggerService', () => {
  let service: ValueLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
