import { TestBed } from '@angular/core/testing';

import { NzapiService } from './nzapi.service';

describe('NzapiService', () => {
  let service: NzapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NzapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
