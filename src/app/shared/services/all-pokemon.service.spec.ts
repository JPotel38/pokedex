import { TestBed } from '@angular/core/testing';

import { AllPokemonService } from './all-pokemon.service';
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AllPokemonService', () => {
  let allPokemonService: AllPokemonService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    allPokemonService = TestBed.inject(AllPokemonService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(allPokemonService).toBeTruthy();
  });
});
