import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import Home from '../pages/home/home'

@Component({
  template: `
    <navbar></navbar>
    <ion-nav [root]="root"></ion-nav>
    `
})
export default class App {
  root:any = Home

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault()
      splashScreen.hide()
    })
  }
}
