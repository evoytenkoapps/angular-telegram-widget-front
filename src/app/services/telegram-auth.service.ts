import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TelegramAuthService {
  constructor() {}

  init() {
    window['loginViaTelegram'] = (loginData) => this.loginResult(loginData);
  }

  public loginResult(data: any) {
    console.log('loginResult', data);
  }
}
