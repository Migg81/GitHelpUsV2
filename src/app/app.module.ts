import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {RepoDetailsPage, repositories,profile,LearnPage,EditProfilePage ,RepoSearchPage,LoginPage,GitRepoListingPagePage} from '../pages/pages';
import { GitcBranchPage ,GitMargePage,GitAboutPage, GitclonePage,GitCommitPage,GitComparePage,GitInitPage,GitPullPage,GitPushPage,GitStatusPage,GitTrackingPage} from '../pages/modal-page/modal-pages';
import { GitService,AuthenticateService } from '../service/shared';
import { Network } from '@ionic-native/network';
import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    GitRepoListingPagePage
  ],
  imports: [
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
    GitRepoListingPagePage
  ],
  providers: [
    GitService,
    AuthenticateService,
    Network,
    Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
