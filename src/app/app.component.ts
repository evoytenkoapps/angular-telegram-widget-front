import { Component, OnInit } from '@angular/core';
import { TelegramAuthService } from './services/telegram-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'telegram-widget';

  constructor(private telegramService: TelegramAuthService) {}

  ngOnInit(): void {
    this.telegramService.init();
  }
}
