import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { repositories,profile,LearnPage,EditProfilePage ,RepoSearchPage} from '../pages/pages';
import { GitcBranchPage ,GitMargePage,GitAboutPage, GitclonePage,GitCommitPage,GitComparePage,GitInitPage,GitPullPage,GitPushPage,GitStatusPage,GitTrackingPage} from '../pages/modal-page/modal-pages';
import { GitService } from '../service/shared';

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
    RepoSearchPage
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
    RepoSearchPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},GitService]
})
export class AppModule {}
