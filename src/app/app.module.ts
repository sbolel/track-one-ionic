import { NgModule, ErrorHandler } from '@angular/core'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import App from './app.component'
import Home from '../pages/home/home'

@NgModule({
  imports: [
    IonicModule.forRoot(App)
  ],
  declarations: [
    App,
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
