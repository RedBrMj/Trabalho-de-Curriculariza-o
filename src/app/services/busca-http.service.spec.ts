import { TestBed } from '@angular/core/testing';

import { BuscaHttpService } from './busca-http.service';

describe('BuscaHttpService', () => {
  let service: BuscaHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscaHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
