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
  tvShowsMap = new Map<string, string[]>();
  selectedWatcher: IWatcher | null = null
  selectedWatcherTvShows: string[] | null = []

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
    this.tvShowsMap.set(username, this.generateRandomTvShows())
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
    this.selectedWatcherTvShows = this.tvShowsMap.get(this.selectedWatcher.watcherName) || []
  }

  onBackToList() {
    this.selectedWatcher = null
  }

  getWatcherKey(watcherIndex: number) {
    return watcherIndex
  }

  private generateRandomTvShows()  {
    const randomListLength = Math.floor(Math.random() * 6 + 5)  // number between 5 and 10
    const shuffledList = WatchersAppModel.KnownTVShows.sort(() => 0.5 - Math.random())
    return shuffledList.slice(0, randomListLength)
  }
}
