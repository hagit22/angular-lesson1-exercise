import { Component } from '@angular/core';
import { generateUsername } from "unique-username-generator";
import { IWatcher, WatchersAppModel } from '../../models/watchers-app-model';

@Component({
  selector: 'app-watchers-app',
  templateUrl: './watchers-app.component.html',
  styleUrl: './watchers-app.component.scss'
})
export class WatchersAppComponent {

  watchersList: IWatcher[] = []
  selectedWatcher: IWatcher | null = null

  onAddWatcher() {
    let username = generateUsername("", 0, 10)
    let profileImageUrl = "https://robohash.org/" + username
    if (username == null) {
      username = WatchersAppModel.DEFAULT_WATCHER_NAME
      profileImageUrl = '../assets/img/default-avatar.png'
    }
    this.watchersList.push({
      watcherName: username,
      profileImageUrl: profileImageUrl
    })
  }

  onRemoveWatcher(watcherIndex: number) {
    const watcher = this.watchersList[watcherIndex]
    if (watcher == null) 
      return
    if (watcher.watcherName == null || watcher.profileImageUrl == null)
      return
    this.watchersList.splice(watcherIndex, 1)
  }

  onSelectWatcher(watcherIndex: number) {
    this.selectedWatcher = this.watchersList[watcherIndex]
  }

  onBackToList() {
    this.selectedWatcher = null
  }

// add back-button which puts null in selectedWatcher
// prepare diagram

  getWatcherKey(watcherIndex: number) {
    return watcherIndex
  }
}
