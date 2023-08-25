import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerService } from './Service/logger.service';
import { ValueLoggerService } from './Service/value-logger.service';

export function customLoggerFactory() {
  return new LoggerService();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: LoggerService, useClass: LoggerService },
              { provide: LoggerService, useValue: { log: (message: string) => console.log(`[ValueLogger]: ${message}`) }},
              { provide: ValueLoggerService, useExisting: LoggerService },
              { provide: LoggerService, useFactory: customLoggerFactory}
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
