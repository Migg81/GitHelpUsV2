import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GitService } from '../../service/shared';
import { Iuser } from '../../models/model';


@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfilePage {

user:Iuser;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public gitService:GitService) {}
  
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
}
