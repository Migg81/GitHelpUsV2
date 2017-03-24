import { Component } from '@angular/core';
import { NavController, NavParams ,ViewController} from 'ionic-angular';

/*
  Generated class for the GitTracking page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-git-tracking',
  templateUrl: 'git-tracking.html'
})
export class GitTrackingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GitTrackingPage');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }
}
