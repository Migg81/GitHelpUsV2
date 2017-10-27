import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { GitService } from '../../service/shared';
import { Iuser } from '../../models/model';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { LoginPage, ErrorPage } from '../pages';

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfilePage {
  gitUser: any;
  user: Iuser;
  imgSrc: any;
  company: any;
  errorMsg: string;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    public loadingctrl: LoadingController,
    public gitService: GitService) { }

  ionViewDidLoad() {
    var username = this.navParams.get("username");
    if (username === undefined) {
      this.navCtrl.setRoot(LoginPage);
    }
    else {
      this.getUser(username);
    }
  }

  getUser(username: string): void {
    let loader = this.loadingctrl.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {
      this.gitService.getUsers(username)
        .then(response => {
          this.user = <Iuser>response;

          loader.dismiss();
        }).catch((err) => {
          this.handleError(err); 
          loader.dismiss();
        });
    });
  }

  private handleError(error: any): void {

    if (error === "Network Unavailable") {
      this.navCtrl.push(ErrorPage);
    }
    else if (error === "Unauthorized") {
      this.errorMsg = "Unauthorized access!";
    }
    else {
      this.errorMsg = "Something went wront please try again."
    }
  }

  takePicture(): void {
    let option: CameraOptions = {
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.PNG,
      targetHeight: 500,
      targetWidth: 500,
      saveToPhotoAlbum: false
    };
    this.camera.getPicture(option).then((imageUri) => {
      this.user.avatar_url = imageUri;
    })
  }

  editProfile(): void {

    var currentUser = localStorage.getItem("currentUser");
    var currentPSWD = localStorage.getItem("pswd")

    this.gitService.updateUser(this.user, currentUser, currentPSWD)
      .subscribe(data => {
        this.user = <Iuser>data;
        this.gitUser = <Iuser>data;
      },
      error => {
        if (error === "Network Unavailable") {
          this.navCtrl.push(ErrorPage);
        }
        else if (error === "Unauthorized") {
          this.errorMsg = "Unauthorized access!";
        }
        else {
          this.errorMsg = "Something went wront please try again."
        }
      });
  }
}
