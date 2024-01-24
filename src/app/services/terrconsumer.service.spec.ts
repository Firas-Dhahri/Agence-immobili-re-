import { TestBed } from '@angular/core/testing';

import { TerrconsumerService } from './terrconsumer.service';

describe('TerrconsumerService', () => {
  let service: TerrconsumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerrconsumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
