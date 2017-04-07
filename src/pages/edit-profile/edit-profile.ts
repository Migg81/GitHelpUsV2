import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { GitService } from '../../service/shared';
import { Iuser } from '../../models/model';
import { Camera,CameraOptions } from 'ionic-native';
import { LoginPage } from '../pages';

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfilePage {
gitUser:any;
user:Iuser;
imgSrc:any;
company:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingctrl:LoadingController,
              public gitService:GitService) {}
  
 getUser(username:string) {
    let loader = this.loadingctrl.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {
       this.gitService.getUsers(username)
        .then(response => {
          this.user=<Iuser>response;

           loader.dismiss();
      });     

    }); 
  }

  ionViewDidLoad()
  {
    var username=this.navParams.get("username");
    if(username===undefined){
      this.navCtrl.setRoot(LoginPage);
    }
    else{
      this.getUser(username);
    }
  }

   takePicture(){
    let option:CameraOptions={
      destinationType:Camera.DestinationType.FILE_URI,
      sourceType:Camera.PictureSourceType.CAMERA,
      encodingType:Camera.EncodingType.PNG,
      targetHeight:500,
      targetWidth:500,
      saveToPhotoAlbum:false
    };
    Camera.getPicture(option).then((imageUri)=>{
      this.user.avatar_url=imageUri;
    })
  }

  editProfile(): void {
    //name = name.trim();
    //if (!name) { return; }

    this.gitService.updateUser(this.user,"migg81","m@jumd3r")
      .subscribe(data => {
        this.user=<Iuser>data;
        this.gitUser=<Iuser>data;
      });
  }
}
