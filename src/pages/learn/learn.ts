import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { GitcBranchPage, GitMargePage, GitAboutPage, GitclonePage, GitCommitPage, GitComparePage, GitInitPage, GitPullPage, GitPushPage, GitStatusPage, GitTrackingPage } from '../modal-page/modal-pages';
import { Network } from '@ionic-native/network';
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
    private toast: ToastController, private network: Network,
    public modalCtrl: ModalController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LearnPage');
    let networkType = this.network.type;
  }

  
  presentGitAboutModal() {
    let modal = this.modalCtrl.create(GitAboutPage);
    modal.present();
  }
  presentGitcBranchModal() {
    let modal = this.modalCtrl.create(GitcBranchPage);
    modal.present();
  }
  presentGitcMargeModal() {
    let modal = this.modalCtrl.create(GitMargePage);
    modal.present();
  }
  presentGitcloneModal() {
    let modal = this.modalCtrl.create(GitclonePage);
    modal.present();
  }
  presentGitCommitModal() {
    let modal = this.modalCtrl.create(GitCommitPage);
    modal.present();
  }
  presentGitCompareModal() {
    let modal = this.modalCtrl.create(GitComparePage);
    modal.present();
  }
  presentGitInitModal() {
    let modal = this.modalCtrl.create(GitInitPage);
    modal.present();
  }
  presentGitPullPageModal() {
    let modal = this.modalCtrl.create(GitPullPage);
    modal.present();
  }
  presentGitPushModal() {
    let modal = this.modalCtrl.create(GitPushPage);
    modal.present();
  }
  presentGitStatusModal() {
    let modal = this.modalCtrl.create(GitStatusPage);
    modal.present();
  }
  presentGitTrackingModal() {
    let modal = this.modalCtrl.create(GitTrackingPage);
    modal.present();
  }
}
