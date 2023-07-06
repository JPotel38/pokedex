import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let utilsService: UtilsService;

  beforeEach(() => {
    utilsService = new UtilsService();
  });

  it('should return true when arrays are equals', () => {
    const pokemonType = ['Feu', 'Eau'];
    const typeSelected = ['Feu', 'Eau'];

    const result = utilsService.arrayEquals(pokemonType, typeSelected);

    expect(result).toBe(true);
  });

  it('should return false when arrays are differents', () => {
    const pokemonType = ['Feu', 'Eau'];
    const typeSelected = ['Plante', 'Electrik'];

    const result = utilsService.arrayEquals(pokemonType, typeSelected);

    expect(result).toBe(false);
  });
});
