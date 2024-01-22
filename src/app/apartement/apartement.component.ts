import { Component, OnInit } from '@angular/core';
import { Apartment } from '../core/models/Appartement';
import { Residence } from '../core/models/Residence';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators , FormBuilder } from '@angular/forms';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-apartement',
  templateUrl: './apartement.component.html',
  styleUrls: ['./apartement.component.css']
})
export class ApartementComponent implements OnInit {
  Title ="Les Résidences";
  addPropertyForm!:FormGroup;
  apartment: any; // Replace 'any' with the actual type of your apartment object

 
id!:number
listres:Residence[]=this.residenceservice.listResidences;

list: Apartment[] = [];   

constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private residenceservice:ResidenceService ) {}

ngOnInit(){
  this.route.paramMap.subscribe(params => {
    //const apartmentId = params.get('id');   
     //this.apartment = { id: apartmentId, /* other details */ };
     this.list = this.listApartments; // or fetch data from a service

     
    });
  }
  listApartmentsFiltered: Apartment[] = []; // Ajout de la propriété listApartmentsFiltered
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",    "image":"/assets/img/fell.jpg","showApartments": false},
    {id:2,"name":"El yasmine",    "address":"Ezzahra","image":"/assets/img/yasmine.jpg","showApartments": false},
    {id:3,"name": "El Arij",    "address":"Rades","image":"/assets/img/arij.jpg","showApartments": false},
    {id:4,"name": "El Anber","address":"Manzah 5",    "image":"/assets/img/anbar.jpg","showApartments": false}
    ];

    listApartments:Apartment[]=[

      {id:1,"appartNum":1,"image":"/assets/img/appart1.jpg","floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"AppartementS+1","residence":this.listResidences[0], "isLiked": false },
      {id:2,"appartNum":2,"image":"/assets/img/appart2.jpg","floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"AppartementS+2","residence":this.listResidences[0], "isLiked": false },
      {id:3,"appartNum":3,"image":"/assets/img/appart3.jpg","floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"AppartementS+3","residence":this.listResidences[1], "isLiked": false },
      ];

          show : boolean = true;
          favoriteApartments : number[]=[];

          toggleApartments(residence: Residence) {
            residence.showApartments = !residence.showApartments;
          }
          getApartmentsByResidence(residence: Residence): Apartment[] {
            return this.residenceservice.listApartments.filter(apartment => apartment.residence.id === residence.id);
          }
          toggleLike(apartment: Apartment) {
            apartment.isLiked = !apartment.isLiked;
            if (apartment.isLiked) {
              // Ajouter l'appartement à la liste de favoris ou effectuer une action similaire
              this.favoriteApartments.push(apartment.id);
            } else {
              // Retirer l'appartement de la liste de favoris si nécessaire
              this.favoriteApartments = this.favoriteApartments.filter(favApartment => favApartment !== apartment.id);
            }
          }

          onSubmit(){
            console.log(this.addPropertyForm.value)
            
                }
                onCancel() {
                  this.addPropertyForm.reset(); // Réinitialise tous les champs du formulaire
                }
                
            
}

