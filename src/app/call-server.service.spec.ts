import { TestBed } from '@angular/core/testing';

import { CallServerService } from './call-server.service';

describe('CallServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallServerService = TestBed.get(CallServerService);
    expect(service).toBeTruthy();
  });
});
