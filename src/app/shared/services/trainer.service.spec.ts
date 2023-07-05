import {TestBed} from '@angular/core/testing';

import {TrainerService} from './trainer.service';
import {mockPokemonList} from "../../tests/mocks/mock-pokemon-team";

describe('TrainerService', () => {
  let trainerService: TrainerService;
  let pokemonTeam = mockPokemonList

  const userObject = {
    login: 'login',
    password: 'pass',
    userName: 'Sacha',
    connected: true,
    pokemonTeam: pokemonTeam
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    trainerService = TestBed.inject(TrainerService);
  });

  it('should be created', () => {
    expect(trainerService).toBeTruthy();
  });

  it('should send user to BehaviorSubject', (done: DoneFn) => {
    trainerService.$user.next(userObject);
    trainerService.$user.subscribe(value => {
      expect(value).toEqual({
        login: 'login',
        password: 'pass',
        userName: 'Sacha',
        connected: true,
        pokemonTeam: pokemonTeam
      });
      done();
    });
  });
});
