import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { Injectable } from '@angular/core';

/*
  Generated class for the BluetoothProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BluetoothProvider {

  constructor(private bluetoothSerial: BluetoothSerial) {
    console.log('Hello BluetoothProvider Provider');
  }

  sendCmd(cmd: String){
    for ( var i = 0; i < cmd.length(); i ++){
      
    }
    for ( var i = 0; i < 10; i ++){
      this.bluetoothSerial.write(cmd+String.fromCharCode(10));

    }
  }

}
