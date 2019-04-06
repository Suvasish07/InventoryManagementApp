import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient} from '@angular/common/http';
import { RequestOptions, Headers} from '@angular/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient, private global: GlobalService) {
   }


   loginService() {
    const url = 'https://mindfire-sample-rest.herokuapp.com/api/Accounts/login'
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('mindfire', 'mindfire' )
    const options = new RequestOptions({headers: headers});
    return this.http.post(url, { 'username': this.global.username,'password':this.global.password });
  }

  getAllProducts() {
    const url = this.global.baseURL;
    return this.http.get(url + '/Products');
  }
  getParticularProductService(id){
    const url = this.global.baseURL;
    return this.http.get(url + '/Products/'+id);
  }
  addProduct(name,price,rating) {
    const url = this.global.baseURL;
    return this.http.post(url + '/Products', { 'name': name,'price':price,'rating':rating });
  }
  updateProductService(name,price,rating,id){
    const url = this.global.baseURL;
    return this.http.post(url + '/updateProducts/' + id, { 'name': name,'price':price,'rating':rating });
  }

  deleteProductService(id) {
    const url = this.global.baseURL;
    return this.http.get(url + '/deleteProduct/' + id);
  }
}
