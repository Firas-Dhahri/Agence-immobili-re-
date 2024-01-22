import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ApartementComponent } from './apartement/apartement.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DetailsapartComponent } from './detailsapart/detailsapart.component';
import { TvComponent } from './tv/tv.component';
import { PhoneComponent } from './phone/phone.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { UpdateResidenceComponent } from './update-residence/update-residence.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

const routes: Routes = [
  { path: 'home', component: AccueilComponent },
  { path: 'residence', component: ResidencesComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'apartments', component: ApartementComponent },
  { path: 'reactiveform', component: ReactiveformComponent },
  { path: 'details/:id', component: DetailsapartComponent },
  { path: 'tv', component: TvComponent },
  { path: 'ph', component: PhoneComponent },
  { path: 'addprod', component: AddproductComponent },
  { path: 'addr', component: AddResidenceComponent },
  { path: 'upr', component: UpdateResidenceComponent },
  {path:'product/:id',component:DetailProductComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 


 }
