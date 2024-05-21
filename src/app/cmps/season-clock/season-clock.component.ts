import { Component } from '@angular/core';
import { SeasonClockModel } from '../../models/season-clock-model';

@Component({
  selector: 'app-season-clock',
  templateUrl: './season-clock.component.html',
  styleUrl: './season-clock.component.scss'
})
export class SeasonClockComponent {

  ngOnInit() {
    this.intervalId = <NodeJS.Timeout> setInterval(() => this.currentTimestamp = new Date(), 1000)
  }

  SeasonTypeEnum = SeasonClockModel.SeasonType;
  BackgroundTypeEnum = SeasonClockModel.BackgroundType;

  currentTimestamp = new Date()
  currentSeason = this.getSeasonFromTimestamp()
  currentSeasonUrl = this.getSeasonUrl()
  currentBackground = SeasonClockModel.BackgroundType.Light
  intervalId: NodeJS.Timeout | null = null

  onClick() {
    this.currentBackground = this.currentBackground == SeasonClockModel.BackgroundType.Light 
      ? SeasonClockModel.BackgroundType.Dark 
      : SeasonClockModel.BackgroundType.Light
  }

  private getMonthFromTimestamp() {
    return this.currentTimestamp.getMonth()
  }
  
  private getSeasonFromTimestamp() {
    const month = this.getMonthFromTimestamp()
    switch (month) {
      case SeasonClockModel.MonthType.December: return SeasonClockModel.SeasonType.Winter
      case SeasonClockModel.MonthType.January: return SeasonClockModel.SeasonType.Winter
      case SeasonClockModel.MonthType.February: return SeasonClockModel.SeasonType.Winter

      case SeasonClockModel.MonthType.March: return SeasonClockModel.SeasonType.Spring
      case SeasonClockModel.MonthType.April: return SeasonClockModel.SeasonType.Spring
      case SeasonClockModel.MonthType.May: return SeasonClockModel.SeasonType.Spring

      case SeasonClockModel.MonthType.June: return SeasonClockModel.SeasonType.Summer
      case SeasonClockModel.MonthType.July: return SeasonClockModel.SeasonType.Summer
      case SeasonClockModel.MonthType.August: return SeasonClockModel.SeasonType.Summer

      case SeasonClockModel.MonthType.September: return SeasonClockModel.SeasonType.Autumn
      case SeasonClockModel.MonthType.October: return SeasonClockModel.SeasonType.Autumn
      case SeasonClockModel.MonthType.November: return SeasonClockModel.SeasonType.Autumn

      default: return SeasonClockModel.SeasonType.Spring
    }
  }

  private getSeasonUrl() {
    //const baseUrl = "../../../../assets/img/seasons/"
    const baseUrl = "/assets/img/seasons/"
    return baseUrl + this.currentSeason + ".png"
  }

  ngOnDestroy() {
    if (this.intervalId == null) 
      return
    clearInterval(this.intervalId)
  }

}
