import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthenticateService } from '../../service/shared';  
import { LearnPage } from '../pages';
import { Storage } from '@ionic/storage';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username:string;
  pswd:string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthenticateService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.verifyLogin();
  }

  userLogin()
  {
    this.authService.login(this.username,this.pswd).then(response => {
       if(response==true)
        {
          this.navCtrl.setRoot(LearnPage)
        }
    });     
  }

  verifyLogin()
  {
    var jj=localStorage.getItem('currentUser');
    if(localStorage.getItem('currentUser')){
      this.navCtrl.setRoot(LearnPage);
    }
  }
}
