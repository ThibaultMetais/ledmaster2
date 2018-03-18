import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

import { BluetoothProvider } from '../../providers/bluetooth/bluetooth';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  marche: Boolean;

  constructor(public navCtrl: NavController
    , private bluetoothSerial: BluetoothSerial
    , private bluetoothProvider:BluetoothProvider) {

  }

  updateOnOff(){
    if ( this.marche ){
      this.bluetoothProvider.sendCmd("sO:1");

    } else {
      this.bluetoothProvider.sendCmd("sO:0");
    }
  }

}
