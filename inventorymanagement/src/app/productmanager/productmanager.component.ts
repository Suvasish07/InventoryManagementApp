import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productmanager',
  templateUrl: './productmanager.component.html',
  styleUrls: ['./productmanager.component.css']
})
export class ProductmanagerComponent implements OnInit {
  product:any;
  productdata:any;
  singleproduct:any;
  name:any;
  price:Number;
  rating:Number;
  totalproduct:Number;
  constructor(private global:GlobalService,private  service:ServiceService, private router: Router) { }

  ngOnInit() {

    this.getallproducts();

  }

  getallproducts(){
    this.service.getAllProducts().subscribe(
      status => {
         this.productdata = status;
         this.product = this.productdata.data;
          this.totalproduct = this.product.length;
      }
  );
  }

getParticularProduct(id){
  this.global.productId = id;
  this.service.getParticularProductService(id).subscribe(data=>{
    this.singleproduct = data;
         this.name = this.singleproduct.data.name;
         this.price = this.singleproduct.data.price;
         this.rating = this.singleproduct.data.rating;
  });
}

addProduct(){
  this.service.addProduct(this.name,this.price,this.rating).subscribe(data=>{
    this.productdata = data;
    this.product=this.productdata.data;
    this.totalproduct=this.product.length;

  });
}

clearProduct() {
  this.name = '';
  this.price = 0;
  this.rating = 0;
}

updateProduct(){
  this.service.updateProductService(this.name,this.price,this.rating, this.global.productId).subscribe(data=>{
    this.productdata = data;
    this.product=this.productdata.data;
    this.totalproduct = this.product.length;
  });
}

deleteProduct(){
  this.service.deleteProductService(this.global.productId).subscribe(data=>{

    this.service.getAllProducts().subscribe(
      status => {
         this.productdata = status;
         this.product = this.productdata.data;
          this.totalproduct = this.product.length;
      }
  );

         this.name = '';
         this.price = 0;
         this.rating = 0;
  });
}

logoutFunc(){
  this.router.navigate(['']);

}


}
