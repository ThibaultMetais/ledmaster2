import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ColorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colors',
  templateUrl: 'colors.html',
})
export class ColorsPage {

listcolors : Color[];
indices : number[];
choix: number;
  color: Color;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listcolors = [];
    this.indices = [];
    this.listcolors.push(new Color());
    this.indices.push(0);
    this.choix = 0;
  }

  addColor() {
    if (this.listcolors.length < 5) {
      this.listcolors.push(new Color());
      this.indices.push(this.listcolors.length-1);
    }
  }

  deleteColor(caze: number) {
    if (this.listcolors.length > 1) {
      this.listcolors.splice(caze,1);
      this.indices.pop();
      if (this.choix>=this.listcolors.length) {
        this.choix=this.listcolors.length-1;
      }
    }
  }

  choisir( c:number ){
    this.choix = c;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColorsPage');
  }

}


class Color{
  red : number;
  green : number;
  blue : number;
  constructor() {
    this.red=0;
    this.green=0;
    this.blue=0;
  }
}
