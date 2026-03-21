import {TestBed} from '@angular/core/testing';

import {AllPokemonService} from './all-pokemon.service';
import {HttpClient, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('AllPokemonService', () => {
  let allPokemonService: AllPokemonService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    });
    allPokemonService = TestBed.inject(AllPokemonService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(allPokemonService).toBeTruthy();
  });
});
