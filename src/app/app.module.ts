import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BluetoothPage } from '../pages/bluetooth/bluetooth';
import { ColorsPage } from '../pages/colors/colors';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { BluetoothProvider } from '../providers/bluetooth/bluetooth';

@NgModule({
  declarations: [
    MyApp,
    BluetoothPage,
    ColorsPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BluetoothPage,
    ColorsPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    BluetoothProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
