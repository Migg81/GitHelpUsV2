import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { GitcBranchPage,GitclonePage } from '../modal-page/modal-pages';

/*
  Generated class for the Learn page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html'
})
export class LearnPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LearnPage');
  }

  presentGitcBranchModal() {
    let modal = this.modalCtrl.create(GitcBranchPage);
    modal.present();
  }
  presentGitcloneModal() {
    let modal = this.modalCtrl.create(GitclonePage);
    modal.present();
  }
}
