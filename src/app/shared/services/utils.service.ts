import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  arrayEquals(pokemonType: string[], typeSelected: string[]): boolean {
    return Array.isArray(pokemonType) &&
      Array.isArray(typeSelected) &&
      pokemonType.length === typeSelected.length &&
      pokemonType.every((val) => val === typeSelected[0] || val === typeSelected[1]);
  }
}
