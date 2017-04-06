import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import { GitService } from '../../service/shared';
import { Iuser } from '../../models/model';
import { EditProfilePage } from '../pages';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class profile {

 user:Iuser;

  constructor(
    public navCtrl: NavController,
    public gitService:GitService,
    public param:NavParams) {
  }

  getUsers(usename:string) {
    this.gitService.getUsers(usename)
    .then(response => {
       this.user=<Iuser>response;
    });      
  }

  ionViewDidLoad()
  {
    var username=this.param.get("username")
    this.getUsers(username);
  }

  editProfile()
  {
    this.navCtrl.push(EditProfilePage);
  }

}
