import { TestBed } from '@angular/core/testing';

import { GetAPIuserService } from './get-apiuser.service';

describe('GetAPIuserService', () => {
  let service: GetAPIuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAPIuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
