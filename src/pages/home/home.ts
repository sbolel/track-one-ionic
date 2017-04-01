import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export default class Home {
  items: any = []

  constructor(public navCtrl: NavController) {
    const storedItems = JSON.parse(localStorage.getItem('trackedItems')) || []
    this.items = this.items.concat(storedItems)
  }

  add() {
    const now = new Date()
    this.items.push({
      dateString: now.toLocaleString(),
      timestamp: now.valueOf()
    })
    localStorage.setItem('trackedItems', JSON.stringify(this.items))
  }
}
