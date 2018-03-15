import { Component } from '@angular/core';

import { BluetoothPage } from '../bluetooth/bluetooth';
import { ColorsPage } from '../colors/colors';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ColorsPage;
  tab3Root = BluetoothPage;

  constructor() {

  }
}
