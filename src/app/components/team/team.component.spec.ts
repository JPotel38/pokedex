import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {TeamComponent} from './team.component';
import {TrainerService} from "../../shared/services/trainer.service";
import {TypesEnum} from "../../shared/enums/types.enum";
import {ColorEnum} from "../../shared/enums/color.enum";
import {mockPokemonTeam} from "../../tests/mocks/mock-pokemon-team";

describe('TeamComponent', () => {
  let teamComponent: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;
  let trainerService: TrainerService;
  const userObject = {
    login: 'login',
    password: 'pass',
    userName: 'Sacha',
    connected: true,
    pokemonTeam: mockPokemonTeam
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TeamComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamComponent);
    teamComponent = fixture.componentInstance;
    trainerService = TestBed.inject(TrainerService);
    trainerService.$user.next(userObject);
    fixture.detectChanges();
  }));

  afterEach(() => {
    const updatedUserObject = {
      ...userObject,
      pokemonTeam: [...mockPokemonTeam]
    };

    trainerService.$user.next(updatedUserObject);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(teamComponent).toBeTruthy();
  });

  it('should delete pokemon from team', () => {
    trainerService.$user.value.pokemonTeam.splice(1, 1);
    fixture.detectChanges();
    expect(trainerService.$user.value.pokemonTeam).toEqual([{
      id: 1,
      name: 'Bulbasaur',
      evolutionLevel: 16,
      types: [TypesEnum.grass],
      height: '0.7 m',
      weight: '6.9 kg',
      taux: 125,
      color: [ColorEnum.grassColor],
      img: './assets/images/Bulbasaur.png',
      icon: './assets/icons/Bulbasaur.png',
      audio: './assets/audio/Bulbasaur.ogg',
      attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip'],
      isLegendary: false,
      generation: '1'
    },
      {
        id: 3,
        name: 'Venusaur',
        types: [TypesEnum.grass],
        height: '2.0 m',
        weight: '100.0 kg',
        taux: 14,
        color: [ColorEnum.grassColor],
        img: './assets/images/Venusaur.png',
        icon: './assets/icons/Venusaur.png',
        audio: './assets/audio/Venusaur.ogg',
        attacks: [' Vine Whip', 'Razor Leaf', ' Seed Bomb', 'Solar Beam'],
        isLegendary: false,
        generation: '1'
      }])
  });

});
