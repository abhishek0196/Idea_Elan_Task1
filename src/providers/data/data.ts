import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  public data;
  url:string= 'https://restcountries.eu/rest/v2/all/';

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }
  getData()
  {
    this.data =  this.http.get<any[]>(this.url);
    return this.data;
  }
  getInfo(id)
  {
    
    this.data =  this.http.get<any[]>('https://restcountries.eu/rest/v2/alpha/'+id);
    return this.data;
  }
  
  
}
