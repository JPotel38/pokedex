import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  user: BehaviorSubject<User> = new BehaviorSubject(null);
  get User() {
    return JSON.parse(localStorage.getItem('user'))
  }
}
