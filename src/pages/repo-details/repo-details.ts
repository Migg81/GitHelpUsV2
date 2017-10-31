import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { GitService } from '../../service/shared';
import { profile, ErrorPage, LearnPage } from '../pages';


@Component({
  selector: 'page-repo-details',
  templateUrl: 'repo-details.html'
})
export class RepoDetailsPage {

  repo: any;
  errorMsg: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public gitService: GitService,
    public loadCtrl: LoadingController) { }

  ionViewDidLoad() {
    var username = this.navParams.get("username");
    var reponame = this.navParams.get("reponame");
    this.loadRepoDetails(username, reponame);
  }

  private loadRepoDetails(username: string, reponame: string) {
    let loader = this.loadCtrl.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {
      this.gitService.getRepoDetails(username, reponame)
        .subscribe(
        repo => {
          this.repo = repo;
          loader.dismiss();
        },
        error => {
          this.handelError(<any>error);
          loader.dismiss();
        },
      );
    });

  }

  private handelError(error: any): void {
    if (error === "Network Unavailable") {
      if (this.navCtrl.length() === 1) {
        this.navCtrl.setRoot(LearnPage);
      }
      else {
        this.navCtrl.pop();
      }
      this.navCtrl.push(ErrorPage);
    }
    else {
      this.errorMsg = "Something went wrong please try again.";
    }
  }

  profileTapped(username: string) {
    this.navCtrl.push(profile, { username: username });
  }
}
