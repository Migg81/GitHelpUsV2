import { Injectable } from '@angular/core';
import { Headers,Http ,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthenticateService {

  constructor(public http: Http) {
    console.log('Hello AuthenticateService Provider');
  }

login(username: string, pswd: string):Promise<boolean>{

    var url = "https://api.github.com/user";
    let updateUserUrl=url +"user"
    var credentials = btoa(username + ':' + pswd);
    let headers = new Headers({ 'Content-Type': 'application/json'});
    headers.append('Authorization', 'Basic ' + credentials);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url,options)
               .toPromise()
               .then(response => this.extractData(response,username,pswd))
               .catch(this.handleError);
}

private extractData(res: any,username:string,pswd:string) {
      let status = res.status;
          if (status===200) {
              localStorage.setItem('currentUser', username);
              return true;
          } else {
              return false;
          }
}

private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
}

}
