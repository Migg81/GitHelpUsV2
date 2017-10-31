import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { GitcBranchPage, GitMargePage, GitAboutPage, GitclonePage, GitCommitPage, GitComparePage, GitInitPage, GitPullPage, GitPushPage, GitStatusPage, GitTrackingPage } from '../modal-page/modal-pages';

import { LoginPage } from '../pages';

@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html'
})
export class LearnPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) { }

  ionViewDidLoad() {

    var username = this.navParams.get("username") === undefined ? localStorage.getItem("currentUser") : this.navParams.get("username");
    if (username === undefined) {
      this.navCtrl.setRoot(LoginPage);
    }
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
