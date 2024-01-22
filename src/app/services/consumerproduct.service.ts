import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsumerproductService {
api='http://localhost:3000/product'

  constructor(private http:HttpClient) { }
getProduct(id:number){
return this.http.get(this.api+'/'+id)
}

deleteProduct(){
  //return this.http.delete(this.api+'/'+id)
}
}