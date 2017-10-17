import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { GitService } from '../../service/shared';
import { Iuser } from '../../models/model';
import { EditProfilePage, LoginPage, ErrorPage } from '../pages';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class profile {

  user: Iuser;
  isLoggedInuser: any;
  errorMsg: string;

  constructor(
    public navCtrl: NavController,
    public gitService: GitService,
    public param: NavParams,
    public loadingctrl: LoadingController) {
  }

  ionViewDidLoad() {
    var username = this.param.get("username") === undefined ? localStorage.getItem("currentUser") : this.param.get("username");
    if (username === undefined) {
      this.navCtrl.setRoot(LoginPage);
    }
    else {
      this.getUsers(username);
    }
  }


  getUsers(username: string): void {

    let loader = this.loadingctrl.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {
      this.gitService.getUsers(username)
        .then(response => {
          this.user = <Iuser>response;

          if (localStorage.getItem("currentUser").toLowerCase() === this.user.login.toLocaleLowerCase()) {
            this.isLoggedInuser = true;
          }
          else {
            this.isLoggedInuser = false;
          }

          loader.dismiss();
        }).catch(error => {
          if (error === "Network Unavailable") {
            this.navCtrl.push(ErrorPage);
          }
          else if (error === "Unauthorized") {
            this.errorMsg = "Unauthorized access!";
          }
          else {
            this.errorMsg = "Something went wront please try again."
          }
          loader.dismiss();
        });
    });
  }

  editProfile(): void {
    this.navCtrl.push(EditProfilePage, { username: this.user.login });
  }

}
