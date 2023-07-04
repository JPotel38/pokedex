import { TestBed } from '@angular/core/testing';

import { AllPokemonResolver } from './all-pokemon-resolver.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AllPokemonResolverService', () => {
  let service: AllPokemonResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AllPokemonResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
