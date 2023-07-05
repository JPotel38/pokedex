import {TestBed} from '@angular/core/testing';

import {TrainerService} from './trainer.service';
import {mockPokemon, mockPokemonTeam} from "../../tests/mocks/mock-pokemon-team";

describe('TrainerService', () => {
  let trainerService: TrainerService;
  let pokemonTeam = mockPokemonTeam;
  let pokemon = mockPokemon;

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
    trainerService.$user.next(userObject);
  });

  afterEach(() => {
    const updatedUserObject = {
      ...userObject,
      pokemonTeam: [...mockPokemonTeam]
    };
    trainerService.$user.next(updatedUserObject);
  });

  it('should be created', () => {
    expect(trainerService).toBeTruthy();
  });

  it('should send user to BehaviorSubject', () => {
    trainerService.$user.subscribe(value => {
      expect(value).toEqual(userObject);
    });
  });

  it('should add Pokemon to team', () => {
    trainerService.addPokemonToTeam(pokemon);
    trainerService.$user.subscribe(value => {
      expect(value.pokemonTeam).toContain(pokemon);
    });
  });

  it('should update Pokemon"s name', () => {
    trainerService.updatePokemonName(0, "Pikachu");
    trainerService.$user.subscribe(value => {
      expect(value.pokemonTeam[0].name).toBe("Pikachu");
    });
  });

});
