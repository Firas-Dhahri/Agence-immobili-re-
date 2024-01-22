import { Injectable } from '@angular/core';
import { Apartment } from '../core/models/Appartement';
import { Residence } from '../core/models/Residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  private residences: any[] = []; // Assuming an array to store residences

  constructor() { }
  addResidence(Residence: any): void {
    this.residences.push(this.residences);
  }
  surfaceFilter: number | undefined;

  listApartmentsFiltered: Apartment[] = []; // Ajout de la propriété listApartmentsFiltered
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",    "image":"/assets/img/fell.jpg","showApartments": false},
    {id:2,"name":"El yasmine",    "address":"Ezzahra","image":"/assets/img/yasmine.jpg","showApartments": false},
    {id:3,"name": "El Arij",    "address":"Rades","image":"/assets/img/arij.jpg","showApartments": false},
    {id:4,"name": "El Anber","address":"Manzah 5",    "image":"/assets/img/anbar.jpg","showApartments": false}
    ];
    listApartments:Apartment[]=[
      {id:1,"appartNum":1,"image":"/assets/img/fell.jpg","floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"AppartementS+1","residence":this.listResidences[0], "isLiked": false },
      {id:2,"appartNum":2,"image":"/assets/img/fell.jpg","floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"AppartementS+2","residence":this.listResidences[0], "isLiked": false },
      {id:3,"appartNum":3,"image":"/assets/img/fell.jpg","floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"AppartementS+3","residence":this.listResidences[1], "isLiked": false },
      ];
      show : boolean = true;
      favoriteApartments : number[]=[];
}
