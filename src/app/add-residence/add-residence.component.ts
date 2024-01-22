import { Component } from '@angular/core';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  newResidence = { name: '', address: '' }; // Add other fields as needed


  constructor(private residenceService: ResidenceService) { }

  addResidence(): void {
    // Add validation logic if needed
    this.residenceService.addResidence(this.newResidence);
    console.log('Residence added:', this.newResidence);
    this.newResidence = { name: '', address: '' };
  }

}