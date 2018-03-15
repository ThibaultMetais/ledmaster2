import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  marche: Boolean;

  constructor(public navCtrl: NavController, private bluetoothSerial: BluetoothSerial) {

  }

  updateOnOff(){
    if ( this.marche ){
      this.bluetoothSerial.write("sO:1"+String.fromCharCode(10));

    } else {
      this.bluetoothSerial.write("sO:0"+String.fromCharCode(10));

    }
  }

}
