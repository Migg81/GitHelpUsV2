import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular'

@Component({
  selector: 'page-gitclone',
  templateUrl: 'gitclone.html'
})
export class GitclonePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GitclonePage');
  }
  
  closeModal(){
    this.viewCtrl.dismiss();
  }
}
