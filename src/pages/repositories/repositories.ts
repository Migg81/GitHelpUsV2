import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { GitService, AuthenticateService } from '../../service/shared';
import { RepoSearchPage, LoginPage, RepoDetailsPage, ErrorPage } from '../pages';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-repositories',
  templateUrl: 'repositories.html'
})
export class repositories {

  repos: any[];
  errorMessage: any;
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  constructor(
    public navCtrl: NavController,
    public gitService: GitService,
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authService: AuthenticateService) {
  }



  itemTapped(event, item): void {
    this.navCtrl.push(repositories, {
      item: item
    });
  }

  ionViewDidLoad() {
    if (this.authService.checkIfUserlogedIn()) {
      var username = localStorage.getItem("currentUser")
      this.getRepoDetails(username);
    }
    else {
      this.navCtrl.setRoot(LoginPage);
    }
  }

  searchRepo() {
    this.navCtrl.push(RepoSearchPage);
  }

  repoNameTapped(username: string, reponame: string) {
    this.navCtrl.push(RepoDetailsPage, { username: username, reponame: reponame });
  }

  getRepoDetails(username: string) {

    let loader = this.loadCtrl.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {
      this.gitService.getRepos(username)
        .subscribe(
        repos => {
          this.repos = repos;
          loader.dismiss();
        },
        error => {
          if (error === "Network Unavailable") {
            this.navCtrl.push(ErrorPage);
          }
          else {
            this.errorMessage = <any>error;
          }
          loader.dismiss();
        },
      );
    });
  }
}
