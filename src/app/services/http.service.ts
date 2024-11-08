import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = "https://api.goodrichitsolutions.com/api/Home";
  constructor(private _http: HttpClient) { }

  postEmail(obj: any) {
    return this._http.post(this.url, obj);
  }
}
