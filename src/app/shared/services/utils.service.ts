import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  arrayEquals(a: any[], b: any[]) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }
}