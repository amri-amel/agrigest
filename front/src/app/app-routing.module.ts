import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusPageComponent } from './layout/aboutus-page/aboutus-page.component';
import { ContactPageComponent } from './layout/contact-page/contact-page.component';
import { EquipementsPageComponent } from './layout/equipements-page/equipements-page.component';
import { HomePageComponent } from './layout/home-page/home-page.component';
import { ParcelsPageComponent } from './layout/parcels-page/parcels-page.component';

const routes: Routes = [
  {
    path:'',component:HomePageComponent
  },
  {
    path:'parcel',component:ParcelsPageComponent
  },
  {
    path:'equipement',component:EquipementsPageComponent,
  },
  {
    path:'aboutus',component:AboutusPageComponent
  },
  {
    path:'contact',component:ContactPageComponent
  },
  {
    path:'**',redirectTo:'', pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
