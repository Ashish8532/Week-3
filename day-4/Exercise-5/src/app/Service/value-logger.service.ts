import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ValueLoggerService implements LoggerService {

  log(message: string): void {
    console.log(`[ValueLogger]: ${message}`);
  }
}
