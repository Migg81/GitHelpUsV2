import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular'
/*
  Generated class for the GitcBranch page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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
