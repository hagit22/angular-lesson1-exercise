import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse-monitor',
  templateUrl: './mouse-monitor.component.html',
  styleUrl: './mouse-monitor.component.scss'
})
export class MouseMonitorComponent {

  xPos: number = 0
  yPos: number = 0

  onMouseMove(mouseEvent: MouseEvent) {
     this.xPos = mouseEvent.x
     this.yPos = mouseEvent.y
  }

}
