import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {mockPokemon, mockPokemonTeam} from "../../tests/mocks/mock-pokemon-team";

describe('UserService', () => {
  let trainerService: UserService;
  let pokemonTeam = mockPokemonTeam;
  let pokemon = mockPokemon;

  const userObject = {
    login: 'login',
    password: 'pass',
    userName: 'Sacha',
    connected: true
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    trainerService = TestBed.inject(UserService);
    trainerService.currentUser$.next(userObject);
  });

  afterEach(() => {
    const updatedUserObject = {
      ...userObject
    };
    trainerService.currentUser$.next(updatedUserObject);
  });

  it('should be created', () => {
    expect(trainerService).toBeTruthy();
  });

  it('should send user to BehaviorSubject', () => {
    trainerService.currentUser$.subscribe(value => {
      expect(value).toEqual(userObject);
    });
  });

  // it('should add Pokemon to team', () => {
  //   trainerService.$user.subscribe(value => {
  //     expect(value.pokemonTeam).toContain(pokemon);
  //   });
  // });
  //
  // it('should update Pokemon"s name', () => {
  //   trainerService.updatePokemonName(0, "Pikachu");
  //   trainerService.$user.subscribe(value => {
  //     expect(value.pokemonTeam[0].name).toBe("Pikachu");
  //   });
  // });

});
