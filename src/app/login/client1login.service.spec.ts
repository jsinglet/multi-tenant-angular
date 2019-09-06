import { TestBed } from '@angular/core/testing';

import { Client1loginService } from './client1login.service';

describe('Client1loginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Client1loginService = TestBed.get(Client1loginService);
    expect(service).toBeTruthy();
  });
});
