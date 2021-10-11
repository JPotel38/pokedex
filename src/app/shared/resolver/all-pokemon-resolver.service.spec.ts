import { TestBed } from '@angular/core/testing';

import { AllPokemonResolver } from './all-pokemon-resolver.service';

describe('AllPokemonResolverService', () => {
  let service: AllPokemonResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllPokemonResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
