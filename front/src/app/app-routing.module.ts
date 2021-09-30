import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEquipementComponent } from './equipement/add-equipement/add-equipement.component';
import { ListEquipementComponent } from './equipement/list-equipement/list-equipement.component';
import { UpdateEquipementComponent } from './equipement/update-equipement/update-equipement.component';
import { AboutusPageComponent } from './layout/aboutus-page/aboutus-page.component';
import { ContactPageComponent } from './layout/contact-page/contact-page.component';
import { EquipementCataloguePageComponent } from './layout/equipement-catalogue-page/equipement-catalogue-page.component';
import { EquipementsPageComponent } from './layout/equipements-page/equipements-page.component';
import { HomePageComponent } from './layout/home-page/home-page.component';
import { ParcelsPageComponent } from './layout/parcels-page/parcels-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'parcel',component:ParcelsPageComponent},
  {path:'about',component:AboutusPageComponent},
  {path:'contact',component:ContactPageComponent},
  {path:'catalogue',component:EquipementCataloguePageComponent},
  {path:'equipement',component:EquipementsPageComponent,
children:[
  {path:'', component:ListEquipementComponent},
  {path:'add',component:AddEquipementComponent},
  {path:'update/:id',component:UpdateEquipementComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
]},
{path:'**', redirectTo:'', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
