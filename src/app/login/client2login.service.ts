import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class Client2loginService extends LoginService {

  constructor() { super(); }

  login(username: string, password: string) : boolean {
    return true;
  }

}
