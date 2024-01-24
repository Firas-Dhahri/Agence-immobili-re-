import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TerrconsumerService } from '../services/terrconsumer.service';
import { Terrain } from '../core/models/Terrain';
import { response } from 'express';

@Component({
  selector: 'app-add-terrain',
  templateUrl: './add-terrain.component.html',
  styleUrls: ['./add-terrain.component.css']
})
export class AddTerrainComponent implements OnInit  {

    addTerrainForm!:FormGroup;

  constructor (private fb: FormBuilder, private terrainconsumerservice:TerrconsumerService ){};
  
  
  
  ngOnInit(): void {
      this.addTerrainForm=this.fb.group({
          name:['',Validators.required],
          adresse:['',Validators.required],
          description:['',Validators.required],
          image:['',Validators.required]
      })

  }
;
    

addTerrain(){
  this.terrainconsumerservice.addTerrain(this.addTerrainForm.value).subscribe(

    response=> {

      alert('added Successfly')

    },
    error =>{

      alert('error')
    }


  )



}
    

}
