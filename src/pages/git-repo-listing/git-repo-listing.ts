import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { LoginPage, ErrorPage } from '../pages';
import { profile, RepoDetailsPage } from '../pages';
import { GitService } from '../../service/shared';

@Component({
  selector: 'page-git-repo-listing',
  templateUrl: 'git-repo-listing.html'
})
export class GitRepoListingPagePage {
  repoListing: any[];
  errorMsg: string;

  constructor(
    public navCtrl: NavController,
    public param: NavParams,
    public gitService: GitService,
    public loadingctrl: LoadingController
  ) { }

  ionViewDidLoad() {
    var username = this.param.get("username") === undefined ? localStorage.getItem("currentUser") : this.param.get("username");
    if (username === undefined) {
      this.navCtrl.setRoot(LoginPage);
    }
    else {
      this.getRepolisting(username);
    }
  }

  getRepolisting(username: string) {
    let loader = this.loadingctrl.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {
      this.gitService.getRepos(username)
        .subscribe(
        response => {
          this.repoListing = response;
          loader.dismiss();
        },
        error => {
          this.handelError(<any>error);
          loader.dismiss();
        })
    });
  }


  private handelError(error: any) {
    if (error === "Network Unavailable") {
      this.navCtrl.push(ErrorPage);
    }
    else {
      this.errorMsg = "Something went wront please try again.";
    }
  }

  profileTapped(username: string) {
    this.navCtrl.push(profile, { username: username });
  }

  repoTapped(reponame: string, username: string) {
    this.navCtrl.push(RepoDetailsPage, { reponame: reponame, username: username });
  }

}
