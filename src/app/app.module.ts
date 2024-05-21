import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { SeasonClockComponent } from './cmps/season-clock/season-clock.component';
import { CountDownComponent } from './cmps/count-down/count-down.component';
import { MouseMonitorComponent } from './cmps/mouse-monitor/mouse-monitor.component';
import { WatchersAppComponent } from './cmps/watchers-app/watchers-app.component';
import { SingleWatcherComponent } from './cmps/single-watcher/single-watcher.component';
import { WatcherDetailsComponent } from './cmps/watcher-details/watcher-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SeasonClockComponent,
    CountDownComponent,
    MouseMonitorComponent,
    WatchersAppComponent,
    SingleWatcherComponent,
    WatcherDetailsComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
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
