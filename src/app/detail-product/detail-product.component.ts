import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ConsumerproductService } from '../services/consumerproduct.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  id!:number;
 Product :any;
  constructor(private route:ActivatedRoute, private cosnumer:ProductService){}
  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.cosnumer.getProductByID(this.id).subscribe(
      (data)=>this.Product=data
    )

  }
  
} 