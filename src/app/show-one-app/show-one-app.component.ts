import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../core/models/Products';

@Component({
  selector: 'app-show-one-app',
  templateUrl: './show-one-app.component.html',
  styleUrls: ['./show-one-app.component.css']
})
export class ShowOneAppComponent {
  @Input()p!:any;
  @Output() notif = new EventEmitter();
  sendDataToParent(products:Product){
this.notif.emit(products);
  }
  // Événement émis vers le composant parent
  showMsgChil(){
    alert('helo from child');
  }
}
