import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
// import rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import url
import { DATA_URL } from '../constants/constant';

@Injectable()
export class GDPService {

  constructor(private http: Http) { }
  
  getData(): Observable<any> {
    return this.http.get( DATA_URL )
      .map(data => data.json())
      .catch(err => {
        console.log("error fetching data", err);
        return Observable.throw(err.json());
    });
  }

}
