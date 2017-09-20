import { Component, ViewChild } from '@angular/core';
import { Nav, Platform ,ToastController} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { profile, LearnPage, repositories, LoginPage } from '../pages/pages';
import { GitService, AuthenticateService } from '../service/shared';
import { Iuser } from '../models/model';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  user = {};

  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(
    public platform: Platform,
    private statusBar: StatusBar,
    public gitService: GitService,
    private network: Network,
    public toastCtrl: ToastController,
    private splashscreen: SplashScreen,
    public authService: AuthenticateService) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profile', component: profile, icon: 'ios-person-outline' },
      { title: 'Repositories', component: repositories, icon: 'ios-albums-outline' },
      { title: 'Learning', component: LearnPage, icon: 'ios-book-outline' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.network.onConnect().subscribe(data => {
        console.log(data)
        this.displayNetworkUpdate(data.type);
      }, error => console.error(error));


      this.statusBar.styleDefault();
      this.splashscreen.hide();
      if (this.authService.checkIfUserlogedIn()) {
        this.getUsers();
      }
      else {
        this.nav.setRoot(LoginPage);
      }
    });
  }

  getUsers() {
    this.gitService.getUsers("migg81")
      .then(response => {
        this.user = <Iuser>response;
      });
    console.log(this.user);
  }

  displayNetworkUpdate(connectionState: string) {
    let networkType = this.network.type
    this.toastCtrl.create({
      message: `You are now ${connectionState} via ${networkType}`,
      duration: 3000
    }).present();
  }
  
  logOut() {
    localStorage.removeItem("currentUser");
    this.nav.setRoot(LoginPage);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
