import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { RepoDetailsPage, repositories, profile, LearnPage, EditProfilePage, RepoSearchPage, LoginPage, GitRepoListingPagePage, ErrorPage } from '../pages/pages';
import { GitcBranchPage, GitMargePage, GitAboutPage, GitclonePage, GitCommitPage, GitComparePage, GitInitPage, GitPullPage, GitPushPage, GitStatusPage, GitTrackingPage } from '../pages/modal-page/modal-pages';
import { GitService, AuthenticateService } from '../service/shared';
import { Network } from '@ionic-native/network';
import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { CheckNetworkProvider } from '../providers/check-network/check-network';


@NgModule({
  declarations: [
    MyApp,
    profile,
    repositories,
    LearnPage,
    GitcBranchPage,
    GitclonePage,
    GitCommitPage,
    GitComparePage,
    GitInitPage,
    GitPullPage,
    GitPushPage,
    GitStatusPage,
    GitTrackingPage,
    GitAboutPage,
    GitMargePage,
    EditProfilePage,
    RepoSearchPage,
    LoginPage,
    RepoDetailsPage,
    GitRepoListingPagePage,
    ErrorPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    profile,
    repositories,
    LearnPage,
    GitcBranchPage,
    GitclonePage,
    GitCommitPage,
    GitComparePage,
    GitInitPage,
    GitPullPage,
    GitPushPage,
    GitStatusPage,
    GitTrackingPage,
    GitAboutPage,
    GitMargePage,
    EditProfilePage,
    RepoSearchPage,
    LoginPage,
    RepoDetailsPage,
    GitRepoListingPagePage,
    ErrorPage
  ],
  providers: [
    GitService,
    CheckNetworkProvider,
    AuthenticateService,
    Network,
    Camera,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    
  ]
})
export class AppModule { }
