import { Component } from '@angular/core';
import { NavController, NavParams ,ViewController} from 'ionic-angular';

/*
  Generated class for the GitPull page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-git-pull',
  templateUrl: 'git-pull.html'
})
export class GitPullPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GitPullPage');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
