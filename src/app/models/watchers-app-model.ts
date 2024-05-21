export interface IWatcher {
    watcherName: string,
    profileImageUrl: string,
}

const DEFAULT_WATCHER_NAME = "some-watcher"
const DEFAULT_WATCHER_IMG = '../assets/img/default-avatar'

const KnownTVShows = [
    "Breaking Bad",
    "Game of Thrones",
    "Stranger Things",
    "The Crown",
    "The Mandalorian",
    "Friends",
    "The Office",
    "Westworld",
    "The Witcher",
    "Sherlock",
    "Black Mirror",
    "Fargo",
    "The Simpsons",
    "The Big Bang Theory",
    "Rick and Morty",
    "Money Heist",
    "Peaky Blinders",
    "Narcos",
    "House of Cards",
    "Ozark",
    "Chernobyl",
    "Better Call Saul",
    "Mindhunter"
  ];
  
  export const WatchersAppModel = {
    DEFAULT_WATCHER_NAME: DEFAULT_WATCHER_NAME,
    DEFAULT_WATCHER_IMG: DEFAULT_WATCHER_IMG,
    KnownTVShows: KnownTVShows
}



  
  