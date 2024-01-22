import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators , FormBuilder } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  addprod!:FormGroup;
  constructor( private formbuilder: FormBuilder, private sp:ProductService, private router:Router,) {}
  ngOnInit(){
  
    this.addprod = this.formbuilder.group({
      id: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      qte: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      title: ['', Validators.required],
      like: ['', Validators.required],
      image: ['', Validators.required]

     
    })

  }
 
  ajouter(){
this.sp.addProduct(this.addprod.value);
this.router.navigateByUrl('/tv');
  }
  onSubmit(){
    console.log(this.addprod.value);
            }
  onCancel() {
    this.addprod.reset(); 
  }
}
