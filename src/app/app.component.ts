import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import Home from '../pages/home/home'

@Component({
  template: `
    <ion-header clear>
      <ion-navbar color="light" clear>
        <ion-title>Track One</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
      <ion-nav class="root_nav" #NAV_ELEMENT [root]="root" main></ion-nav>
    </ion-content>
  `
})
export default class App {
  protected root = Home

  constructor (
    protected platform: Platform,
    protected splashScreen: SplashScreen,
    protected statusBar: StatusBar
  ) {
    platform
      .ready()
      .then(() => {
        statusBar.styleDefault()
        splashScreen.hide()
      })
  }
}
