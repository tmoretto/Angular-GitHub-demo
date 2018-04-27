import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class RepoService {
  private baseUrl:string='https://api.github.com';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});

  constructor(private _http:Http) { }

  getRepos(login:string) {
    return this._http.get(this.baseUrl+'/users/'+login+'/repos',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }

  errorHandler(error:Response) {
    return Observable.throw(error||"SERVE ERROR");
  }

}
