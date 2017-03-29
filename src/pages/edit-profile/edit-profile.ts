import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GitService } from '../../service/shared';
import { Iuser } from '../../models/model';
import { Camera,CameraOptions } from 'ionic-native';

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
