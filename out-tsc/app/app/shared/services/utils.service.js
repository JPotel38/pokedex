import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
let UtilsService = class UtilsService {
    arrayEquals(pokemonType, typeSelected) {
        return Array.isArray(pokemonType) &&
            Array.isArray(typeSelected) &&
            pokemonType.length === typeSelected.length &&
            pokemonType.every((val) => val === typeSelected[0] || val === typeSelected[1]);
    }
};
UtilsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UtilsService);
export { UtilsService };
//# sourceMappingURL=utils.service.js.map