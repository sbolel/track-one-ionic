import { Component } from '@angular/core'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export default class Home {
  static get localStorage(): Array<string> {
    const saved = localStorage.getItem('tracked_items')
    return saved ? JSON.parse(saved) : []
  }

  protected tracks: Array<string> = []
  protected newest: string = null

  constructor() {
    this.tracks = Home.localStorage
    this.newest = this.tracks.length ? this.tracks.shift() : null
  }

  protected updateLocalStorage() {
    localStorage.setItem('tracked_items', JSON.stringify([this.newest].concat(this.tracks)))
  }

  protected add(): void {
    if (this.newest) {
      this.tracks.unshift(this.newest)
    }
    const now = new Date()
    this.newest = now.toLocaleString()
    this.updateLocalStorage()
  }
}
