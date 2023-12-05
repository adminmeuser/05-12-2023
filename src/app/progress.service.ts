import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  public datashare:any=[];

  constructor(public http:HttpClient) { }

  getData(){
    return this.datashare;
  }

  addData(data:any){
    this.datashare.push(data);
  }

  getCountries(){
    return this.http.get('v3.1/all')
  }

  searchCountry(search:string){
    return this.http.get('v3.1/name/'+search);
  }
}

