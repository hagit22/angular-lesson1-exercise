import { Component, Input } from '@angular/core';
import { WatchersAppModel } from '../../models/watchers-app-model';

@Component({
  selector: 'app-watcher-details',
  templateUrl: './watcher-details.component.html',
  styleUrl: './watcher-details.component.scss'
})
export class WatcherDetailsComponent {
  @Input() tvShowsList: string[] | null = []

  getTvShowKey(showsIndex: number) {
    return showsIndex
  }
}


