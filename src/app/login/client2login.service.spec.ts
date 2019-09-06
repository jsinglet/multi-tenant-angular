import { TestBed } from '@angular/core/testing';

import { Client2loginService } from './client2login.service';

describe('Client2loginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Client2loginService = TestBed.get(Client2loginService);
    expect(service).toBeTruthy();
  });
});
