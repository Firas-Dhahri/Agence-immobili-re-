import { Component, ViewChild } from '@angular/core';
import { Phone } from '../core/models/Phone';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent {
  @ViewChild('show-one-app') child :any;
    listPhone :Phone[]=[
  {id:1,title:"Iphone14",price:1550,quantity:2, "image":"/assets/img/ph.jpg"},
  {id:2,title:"Iphone13",price:1450,quantity:3, "image":"/assets/img/ph.jpg"},
  {id:3,title:"Iphone12",price:1350,quantity:4, "image":"/assets/img/ph.jpg"}
  
    ]
    affichemsg(){
      this.child.showMsgChil();
    }
  
  }
  

