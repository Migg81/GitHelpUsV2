import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { GitService } from '../../service/shared';
import { Iuser } from '../../models/model';
import { EditProfilePage } from '../pages';;
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class profile {

 user:Iuser;

  constructor(
    public navCtrl: NavController,
    public gitService:GitService) {
  }

  getUsers() {
    this.gitService.getUsers("migg81")
    .then(response => {
       this.user=<Iuser>response;
    });      
  }
  ionViewDidLoad()
  {
    this.getUsers();
  }
  editProfile()
  {
    this.navCtrl.push(EditProfilePage);
  }
}
