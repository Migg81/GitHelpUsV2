import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular'
/*
  Generated class for the GitCommit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-git-commit',
  templateUrl: 'git-commit.html'
})
export class GitCommitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GitCommitPage');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }
}
