import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CountdownModel } from '../../models/count-down-model';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrl: './count-down.component.scss'
})
export class CountDownComponent {

  ngOnInit() {
    if (this.countdownClock == null)
      this.countdownClock = CountdownModel.COUNTDOWN_START_DEFAULT
    this.countdownClock *= CountdownModel.MILLISECONDS

    this.intervalId = <NodeJS.Timeout> setInterval(() => {
      if (this.countdownClock <= 0 && this.intervalId != null) {
        this.due.emit()
        clearInterval(this.intervalId)
        return
      }
      this.countdownClock -= 1 * CountdownModel.MILLISECONDS
      console.log("clock is: ",this.countdownClock)
      this.tenOrLess = this.isTenOrLess()
    }, 1000)
  }
  
  countdownCaption = 'COUNTDOWN'

  @Input() countdownClock!: number //| null = null// = CountdownModel.COUNTDOWN_START_DEFAULT// | null = null
  @Output() due = new EventEmitter()

  tenOrLess = this.isTenOrLess()
  intervalId: NodeJS.Timeout | null = null

  isTenOrLess() {
    if (this.countdownClock == null)
      return false
    return this.countdownClock / CountdownModel.MILLISECONDS <= 10
  }

  ngOnDestroy() {
    if (this.intervalId == null) 
      return
    clearInterval(this.intervalId)
  }

}
