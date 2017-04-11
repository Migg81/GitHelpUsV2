import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {RepoDetailsPage, repositories,profile,LearnPage,EditProfilePage ,RepoSearchPage,LoginPage} from '../pages/pages';
import { GitcBranchPage ,GitMargePage,GitAboutPage, GitclonePage,GitCommitPage,GitComparePage,GitInitPage,GitPullPage,GitPushPage,GitStatusPage,GitTrackingPage} from '../pages/modal-page/modal-pages';
import { GitService,AuthenticateService } from '../service/shared';

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
    RepoDetailsPage
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
    RepoDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},GitService,AuthenticateService]
})
export class AppModule {}
