import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, AfterViewInit {
  @ViewChild('script', { static: true }) script: ElementRef;
public botName:string = env

  constructor() {}

  ngOnInit(): void {
    // window['loginViaTelegram'] = (loginData) => this.loginResult(loginData);
  }

  ngAfterViewInit() {
    this.convertToScript();
  }

  convertToScript() {
    const element = this.script.nativeElement;
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?5';
    script.setAttribute('data-telegram-login', 'jozikrobot');
    script.setAttribute('data-size', 'large');
    // Callback function in global scope
    script.setAttribute('data-onauth', 'loginViaTelegram(user)');
    script.setAttribute('data-request-access', 'write');
    element.parentElement.replaceChild(script, element);
  }

  public loginResult(data: any) {
    console.log('loginResult', data);
  }
}
