import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { SeasonClockComponent } from './cmps/season-clock/season-clock.component';
import { CountDownComponent } from './cmps/count-down/count-down.component';
import { MouseMonitorComponent } from './cmps/mouse-monitor/mouse-monitor.component';
import { WatchersAppComponent } from './cmps/watchers-app/watchers-app.component';

@NgModule({
  declarations: [
    AppComponent,
    SeasonClockComponent,
    CountDownComponent,
    MouseMonitorComponent,
    WatchersAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//ng g c ./cmps/SeasonClock
//ng g c ./cmps/CountDown
//ng g c ./cmps/MouseMonitor
//ng g c ./cmps/WatchersApp
