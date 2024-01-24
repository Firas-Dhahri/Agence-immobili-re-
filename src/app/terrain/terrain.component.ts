import { Component, OnInit } from '@angular/core';
import { TerrainServiceService } from '../services/terrain-service.service';
import { Terrain } from '../core/models/Terrain';
import { TerrconsumerService } from '../services/terrconsumer.service';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit {
  
  
  listTerrain!: Terrain[];
    
  constructor(private terrainService: TerrainServiceService , private cosnsTerr: TerrconsumerService) { }


  ngOnInit(): void {
    this.listTerrain = this.terrainService.listTerrain;

    this.cosnsTerr.getall().subscribe(

        response=>{
              this.listTerrain=response;
            console.log(this.listTerrain);
        }, 
        error =>{
          console.log("erreur");

        }
      

    );


  }



}
