import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController, LoadingController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { profile, LearnPage, repositories, LoginPage, ErrorPage } from '../pages/pages';
import { GitService, AuthenticateService } from '../service/shared';
import { Iuser } from '../models/model';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LearnPage;
  user = {};

  pages: Array<{ title: string, component: any, android: string, ios: string }>;

  constructor(
    public platform: Platform,
    private statusBar: StatusBar,
    public gitService: GitService,
    private network: Network,
    public toastCtrl: ToastController,
    private splashscreen: SplashScreen,
    public authService: AuthenticateService,
    public loadingctrl: LoadingController) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profile', component: profile, android: 'md-person', ios: 'ios-person' },
      { title: 'Repositories', component: repositories, android: 'md-albums', ios: 'ios-albums' },
      { title: 'Learning', component: LearnPage, android: 'md-book', ios: 'ios-book' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString('#6a0080');

      this.network.onConnect().subscribe(
        data => {
          this.displayNetworkUpdate(data.type);
        },
        error => {
          // to do
        }
      );

      this.network.onDisconnect().subscribe(
        data => {
          this.displayNetworkUpdate(data.type);
        },
        error => {
          // to do
        }
      );

      this.splashscreen.hide();

      if (this.authService.checkIfUserlogedIn()) {
        var currentUser = localStorage.getItem("currentUser")
        this.getUsers(currentUser);
        this.nav.setRoot(LearnPage);
      }
      else {
        this.nav.setRoot(LoginPage);
      }
    });
  }


  getUsers(username: string): void {

    let loader = this.loadingctrl.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {
      this.gitService.getUsers(username)
        .then(response => {
          this.user = <Iuser>response;
          loader.dismiss();
        }).catch(error => {
          if (error === "Network Unavailable") {
            this.nav.setRoot(LearnPage);
          }
          loader.dismiss();
        });
    });
  }

  displayNetworkUpdate(connectionState: string) {
    let networkType = this.network.type;
    let msg: string = `You are now ${connectionState} via ${networkType}`;
    if (networkType === "none") {
      msg = "You are offline"
    }

    this.toastCtrl.create({
      message: msg,
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
