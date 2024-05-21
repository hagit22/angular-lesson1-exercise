import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IWatcher } from '../../models/watchers-app-model';

@Component({
  selector: 'app-single-watcher',
  templateUrl: './single-watcher.component.html',
  styleUrl: './single-watcher.component.scss'
})
export class SingleWatcherComponent {

  @Input() watcher!: IWatcher | null
  @Input() watcherIndex: number | null = null
  @Output() selectWatcher = new EventEmitter()
  @Output() removeWatcher = new EventEmitter()

  emitSelectWatcher(selectWatcherEvent: MouseEvent) {
    const target = selectWatcherEvent.currentTarget as HTMLElement
    const watcherId = target.id
    this.selectWatcher.emit(watcherId)
  }

  emitRemoveWatcher(removeWatcherEvent: MouseEvent) {
    const target = removeWatcherEvent.currentTarget as HTMLElement
    const watcherId = target.id
    this.removeWatcher.emit(watcherId)
  }
}
