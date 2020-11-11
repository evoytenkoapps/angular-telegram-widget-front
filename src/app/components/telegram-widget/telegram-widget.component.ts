import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-telegram-widget',
  templateUrl: './telegram-widget.component.html',
  styleUrls: ['./telegram-widget.component.css'],
})
export class TelegramWidgetComponent implements OnInit, AfterViewInit {
  @ViewChild('script', { static: true }) script: ElementRef;
  private botName: string = environment.botName;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.convertToScript();
  }

  convertToScript() {
    const element = this.script.nativeElement;
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?5';
    script.setAttribute('data-telegram-login', this.botName);
    script.setAttribute('data-size', 'large');
    // Callback function in global scope
    script.setAttribute('data-onauth', 'loginViaTelegram(user)');
    script.setAttribute('data-request-access', 'write');
    element.parentElement.replaceChild(script, element);
  }
}
