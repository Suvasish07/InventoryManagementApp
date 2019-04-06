import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
username:string;
password:string;
baseURL:any;
productId:any;
loginstatus:boolean;
  constructor() { 
    this.baseURL="http://localhost:3000/api";
    this.loginstatus=false;
  }

}
