import { Component } from '@angular/core';
import { NavController, NavParams ,LoadingController} from 'ionic-angular';
import { profile,RepoDetailsPage } from '../pages';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { GitService } from '../../service/shared';
import { Iuser } from '../../models/model';


@Component({
  selector: 'page-repo-search',
  templateUrl: 'repo-search.html'
})
export class RepoSearchPage {

  users: Observable<any[]>;
  private searchTerms = new Subject<string>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public gitService:GitService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepoSearchPage');

    this.users = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.gitService.repoSearchByUsers(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<any[]>([]))
        .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<any[]>([]);
      });

  }

  repoSearch(term: string): void {

    let loader = this.loadCtrl.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {
    this.searchTerms.next(term);
    loader.dismiss();
    });
  }

  profileTapped(username:string){
    this.navCtrl.push(profile,{username:username});      
  }

  repoTapped(reponame:string,username:string){
     this.navCtrl.push(RepoDetailsPage,{reponame:reponame,username:username});      
  }
}
