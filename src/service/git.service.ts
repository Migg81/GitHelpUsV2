import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Iuser } from '../models/model';

@Injectable()
export class GitService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private gitApIUrl = 'https://api.github.com/';  // URL to web api
  constructor(private http: Http) { }

  getUsers(username:string): Promise<Iuser> {
    var getuserUrl=this.gitApIUrl+"users/"+username;
    return this.http.get(getuserUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getRepos(username:string):Observable<any[]>{
     var gitRepoUrl=this.gitApIUrl+"users/"+username+"/repos";
    return this.http.get(gitRepoUrl)
              .map(this.extractData)
              .catch(this.handleError);
  }

  private extractData(res: any) {
    let result = res.json();
    return result || { };
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
