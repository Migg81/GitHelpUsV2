import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { GitService } from '../../service/shared';
import { profile } from '../pages';

/*
  Generated class for the RepoDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-repo-details',
  templateUrl: 'repo-details.html'
})
export class RepoDetailsPage {

  repo:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public gitService:GitService,
    public loadCtrl:LoadingController) {}

  ionViewDidLoad() {
    var username=this.navParams.get("username");
    var reponame=this.navParams.get("reponame");
    this.loadRepoDetails(username,reponame);
  }

  private loadRepoDetails(username:string,reponame:string)
  {
     let loader = this.loadCtrl.create({
      content: 'Getting data...'
    });

     loader.present().then(() => {
          this.gitService.getRepoDetails(username,reponame)
                     .subscribe(
                       repo => {
                            this.repo = repo;
                            loader.dismiss();
                       },
                       error =>  {
                         this.handelError(<any>error);
                        },
                );
     });

  }

  private handelError(error:any){
    //to do
  }

  profileTapped(username:string){
    this.navCtrl.push(profile,{username:username});
  }
}
