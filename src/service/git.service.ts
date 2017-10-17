import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Iuser } from '../models/model';
import { CheckNetworkProvider } from '../providers/check-network/check-network';
import { AuthenticateService } from "./authenticate-service";

@Injectable()
export class GitService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private gitApIUrl = 'https://api.github.com/';  // URL to web api

  constructor(
    private http: Http,
    public networkProvider: CheckNetworkProvider,
    public authService: AuthenticateService) { }

  user: Iuser;
  getUsers(username: string): Promise<Iuser> {

    if (this.networkProvider.CheckNetworkConnection() === "none") {
      return Promise.reject("Network Unavailable");
    }

    var getuserUrl = this.gitApIUrl + "users/" + username;
    return this.http.get(getuserUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getRepos(username: string): Observable<any[]> {
    var gitRepoUrl = this.gitApIUrl + "users/" + username + "/repos";
    return this.http.get(gitRepoUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getRepoDetails(username: string, repoName: string): Observable<any[]> {
    var gitRepoUrl = this.gitApIUrl + "repos/" + username + "/" + repoName;
    return this.http.get(gitRepoUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: any) {
    let result = res.json();
    return result || {};
  }


  public updateUser(user: any, username: string, pswd: string): Observable<Iuser> {

    let updateUserUrl = this.gitApIUrl + "user"
    var credentials = btoa(username + ':' + pswd);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Basic ' + credentials);
    let options = new RequestOptions({ headers: headers });


    return this.http.patch(
      updateUserUrl,
      JSON.stringify(
        {
          name: user.name,
          email: user.email,
          location: user.location,
          bio: user.bio,
          company: user.company
        }),
      options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  searchGitUsers(username: string): Observable<Iuser[]> {
    var getuserUrl = this.gitApIUrl + "search/users?q=" + username;
    return this.http.get(getuserUrl)
      .map(response => {
        var returnData = response.json();
        var returnItems = returnData.items;
        return returnItems;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {

    return Promise.reject(error.statusText || error);
  }

}
