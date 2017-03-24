import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { repositories,profile,LearnPage } from '../pages/pages';
import { GitcBranchPage ,GitclonePage} from '../pages/modal-page/modal-pages';
import { GitService } from '../service/shared';

@NgModule({
  declarations: [
    MyApp,
    profile,
    repositories,
    LearnPage,
    GitcBranchPage,
    GitclonePage
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
    GitclonePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},GitService]
})
export class AppModule {}
