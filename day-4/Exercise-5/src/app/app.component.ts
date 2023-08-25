import { Component } from '@angular/core';
import { LoggerService } from './Service/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercise-5';
  loggerMessage!: string;

  constructor(private loggerService: LoggerService) {
  }

  useClassExample(): void {
    this.loggerService.log('Using useClass');
    this.loggerMessage = "Using useClass";
  }

  useValueExample(): void {
    this.loggerService.log('Using useValue');
    this.loggerMessage = "Using useValue";
  }

  useExistingExample(): void {
    this.loggerService.log('Using useExisting');
    this.loggerMessage = "Using useExisting";
  }

  useFactoryExample(): void {
    this.loggerService.log('Using useFactory');
    this.loggerMessage = "Using useFactory";
  }
}
