import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';

@Component({
  selector: 'page-gitc-branch',
  templateUrl: 'gitc-branch.html'
})
export class GitcBranchPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GitcBranchPage');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }
}
