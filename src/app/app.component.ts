import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import Home from '../pages/home/home'

const EL: any = {
  header: '<header class="header"></header>',
  menu: '<ion-menu [content]="NAV_ELEMENT"></ion-menu>',
  nav: '<ion-nav class="root_nav" #NAV_ELEMENT [root]="root" main></ion-nav>'
}

@Component({
  template: `
    <section class="root">
      ${ EL.header }
      <ion-split-pane class="root__pane">
        ${ EL.menu }
        ${ EL.nav }
      </ion-split-pane>
    </section>
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
