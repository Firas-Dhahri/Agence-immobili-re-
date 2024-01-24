import { Injectable } from '@angular/core';
import { Terrain } from '../core/models/Terrain';

@Injectable({
  providedIn: 'root'
})
export class TerrainServiceService {
  //private terrain: any[] = []; // Assuming an array to store residences

  constructor() { }
  listTerrain:Terrain[]=[
    {id:1,"name": "Terrain","address":"Borj Cedria", desc:"480m2 devant l'aireport",   "image":"/assets/img/t1.jpg"},
    {id:2,"name":"Terrain", desc:"480m3 devant l'aireport",    "address":"Ezzahra","image":"/assets/img/t2.jpg"},
    {id:3,"name": "Terrain", desc:"600m3 prés de tout comodité",    "address":"Rades","image":"/assets/img/t2.jpg"},
    {id:4,"name": "Terrain",desc:"505m3 fil 5la el me5li", "address":"Manzah 5",    "image":"/assets/img/t4.jpg"}
    ];

}
