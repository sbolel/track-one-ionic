/** @desc dependencies */
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { NgModule, ErrorHandler } from '@angular/core'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'

/** @desc components */
import App from './app.component'
import Home from '../pages/home/home'
import { Footer } from '../components'
import firebaseConfig from '../firebase.config'

firebaseConfig()

/**
 * @desc the main application Ionic module
 * @exports {AppModule}
 * @module {NgModule} IonicApp
 */
@NgModule({
  bootstrap: [
    IonicApp
  ],
  declarations: [
    App,
    Footer,
    Home
  ],
  entryComponents: [
    App,
    Home
  ],
  imports: [
    IonicModule.forRoot(App)
  ],
  providers: [
    SplashScreen,
    StatusBar,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
