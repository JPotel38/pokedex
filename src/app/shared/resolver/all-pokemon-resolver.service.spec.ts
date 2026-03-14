import {TestBed} from '@angular/core/testing';

import {AllPokemonResolver} from './all-pokemon-resolver.service';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('AllPokemonResolverService', () => {
  let service: AllPokemonResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    });
    service = TestBed.inject(AllPokemonResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
