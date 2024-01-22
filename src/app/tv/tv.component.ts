import { Component } from '@angular/core';
import { Product } from '../core/models/Products';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';
import { ConsumerproductService } from '../services/consumerproduct.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
  listProduct!: any;
    filteredTVs: any[] = []; // Initialize filteredTVs with an empty array
    stock!: number; 
    id!:number;

  constructor(private sp:ProductService , private cl:CalculService ,private consumer:ProductService,private route:ActivatedRoute ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.consumer.getProductByID(this.id).subscribe(
      (data) => this.listProduct = data
    );
    this.consumer.getProductByID(this.id).subscribe({
      next: (data) => this.listProduct = data,
    });
  }
  afterReciveData(t:any){
    console.log(t);
  }
  getalert(){
 this.stock=this.cl.getStat(this.listProduct,'quantity',2);
  }


}
