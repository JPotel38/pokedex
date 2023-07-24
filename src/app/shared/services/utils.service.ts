import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(public readonly router: Router) {
  }

  arrayEquals(pokemonType: string[], typeSelected: string[]): boolean {
    return Array.isArray(pokemonType) &&
      Array.isArray(typeSelected) &&
      pokemonType.length === typeSelected.length &&
      pokemonType.every((val) => val === typeSelected[0] || val === typeSelected[1]);
  }

  goBackToPokedex(): void {
    this.router.navigate([`/`]);
  }
}
