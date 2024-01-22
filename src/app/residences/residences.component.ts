    import { Component } from '@angular/core';
    import { Residence } from '../core/models/Residence';
  import { Apartment } from '../core/models/Appartement';
import { ResidenceService } from '../services/residence.service';
import { ConsumerproductService } from '../services/consumerproduct.service';
import { PopupService } from '../popup/popup.service';


    @Component({
      selector: 'app-residences',
      templateUrl: './residences.component.html',
      
      styleUrls: ['./residences.component.css']
    })
    export class ResidencesComponent {
      Title ="Résidences";
      surf: number | undefined= this.residenceservice.surfaceFilter;
      listapf:Apartment[] = []=this.residenceservice.listApartmentsFiltered;
      favapp : number[]=[]=this.residenceservice.favoriteApartments;
      listres:Residence[]=this.residenceservice.listResidences;


      constructor(private residenceservice:ResidenceService, private consume:ConsumerproductService  ){}

      
        

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
              this.residenceservice.favoriteApartments.push(apartment.id);
            } else {
              // Retirer l'appartement de la liste de favoris si nécessaire
              this.residenceservice.favoriteApartments = this.residenceservice.favoriteApartments.filter(favApartment => favApartment !== apartment.id);
            }
          }
          

              
  applySurfaceFilter() {
    // Vérifier si surfaceFilter est défini et supérieur à zéro
    if (this.residenceservice.surfaceFilter !== undefined && this.residenceservice.surfaceFilter > 0) {
      this.residenceservice.listApartmentsFiltered = this.residenceservice.listApartments.filter(apartment => apartment.surface === this.residenceservice.surfaceFilter);
    } else {
      // Si la valeur n'est pas définie ou égale à zéro, afficher tous les appartements
      this.residenceservice.listApartmentsFiltered = this.residenceservice.listApartments;
    }
  }
         /* openPopup() {
        this.popupService.openPopup();}*/

        }

