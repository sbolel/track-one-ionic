import { NgModule, ErrorHandler } from '@angular/core'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import App from './app.component'
import Home from '../pages/home/home'
import { Navbar, Footer } from '../components'

@NgModule({
  imports: [
    IonicModule.forRoot(App)
  ],
  declarations: [
    App,
    Navbar,
    Footer,
    Home
  ],
  entryComponents: [
    App,
    Home
  ],
  bootstrap: [IonicApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
