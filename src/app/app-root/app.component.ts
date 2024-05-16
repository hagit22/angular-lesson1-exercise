import { Component } from '@angular/core';
import { AppRootModel } from '../models/app-root-model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'lesson1-ex';

  ComponentTypeEnum = AppRootModel.ComponentType;
  selectedComponent = AppRootModel.ComponentType.SeasonClock

  onDue() {
    this.playAudio("../../../assets/audio/Done.mp3")
  }

  onChangeComponent = (selectionEvent: any) => {
    console.log("onChangeComponent1: ",selectionEvent)
    console.log("onChangeComponent2: ",selectionEvent.target)
    console.log("onChangeComponent3: ",selectionEvent.target.value)
    this.selectedComponent = selectionEvent.target.value
  }

  playAudio(src: string){
    let audio = new Audio();
    audio.src = src;
    audio.load();
    audio.play();
  }

}
