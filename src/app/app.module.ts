import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { FormControl, FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ApartementComponent } from './apartement/apartement.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DetailsapartComponent } from './detailsapart/detailsapart.component';
import { TvComponent } from './tv/tv.component';
import { ShowOneAppComponent } from './show-one-app/show-one-app.component';
import { PhoneComponent } from './phone/phone.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ErrorsComponent } from './errors/errors.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { UpdateResidenceComponent } from './update-residence/update-residence.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './popup/popup.component';
import { TerrainComponent } from './terrain/terrain.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddTerrainComponent } from './add-terrain/add-terrain.component';


@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    NavbarComponent,
    AccueilComponent,
    NotfoundComponent,
    ApartementComponent,
    ReactiveformComponent,
    DetailsapartComponent,
    TvComponent,
    ShowOneAppComponent,
    PhoneComponent,
    AddproductComponent,
    ErrorsComponent,
    AddResidenceComponent,
    UpdateResidenceComponent,
    DetailProductComponent,
    PopupComponent,
    TerrainComponent,
    AddTerrainComponent,

    

    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
