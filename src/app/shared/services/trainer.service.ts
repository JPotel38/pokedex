import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  trainerName: BehaviorSubject<string> = new BehaviorSubject(null);
}
