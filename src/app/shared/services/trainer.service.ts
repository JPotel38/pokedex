import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  trainer: BehaviorSubject<User> = new BehaviorSubject(null);
  getUser() {
  }
}
