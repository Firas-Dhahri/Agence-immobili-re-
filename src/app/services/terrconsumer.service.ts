import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Terrain } from '../core/models/Terrain';

@Injectable({
  providedIn: 'root'
})
export class TerrconsumerService {

   baseurl='http://localhost:3000/terrain';

  constructor( private httpClient:HttpClient ) { }
     
  getall(){
     return  this.httpClient.get<Terrain[]>(this.baseurl);

  }

  addTerrain(terrain:Terrain){

    return this.httpClient.post(this.baseurl,terrain);


  }


}
