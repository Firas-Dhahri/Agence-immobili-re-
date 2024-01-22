export class Residence {
        id!:number;
        name!:string;
        address!: string;
        image!:string;
    showApartments: boolean; // Ajoutez la propriété showApartments de type booléen

  constructor(id: number, name: string, address: string, image: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.image = image;
    this.showApartments = false; // Initialisez showApartments par défaut à false
  }
    }