import { TestBed } from '@angular/core/testing';

import { PokemonDetailsResolver } from './pokemon-details-resolver.service';

describe('PokemonDetailsService', () => {
  let service: PokemonDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonDetailsResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
