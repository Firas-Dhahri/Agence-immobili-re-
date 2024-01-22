import { Injectable } from '@angular/core';
import { Product } from '../core/models/Products';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api='http://localhost:3000/product'
  listProduct :Product[]=[
    {id:1,title:"Samsung",price:1800,quantity:2, "image":"/assets/img/tv1.jpg"},
    {id:2,title:"LG",price:1450,quantity:2, "image":"/assets/img/tv1.jpg"},
    {id:3,title:"Dell",price:2050,quantity:2, "image":"/assets/img/tv1.jpg"}
      ]
      
      
  constructor(private http:HttpClient) { }

  addProduct(produit:Product){
    this.listProduct.push(produit);  

  }
  getProduct(id:number){
    return this.http.get(this.api+'/'+id)
    }
    getProductByID(id:number) {
      return this.http.get(this.api +'/'+ id);
    }
}
