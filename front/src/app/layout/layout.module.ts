import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ParcelsPageComponent } from './parcels-page/parcels-page.component';
import { EquipementsPageComponent } from './equipements-page/equipements-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { EquipementCataloguePageComponent } from './equipement-catalogue-page/equipement-catalogue-page.component';
import { EquipementModule } from '../equipement/equipement.module';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    HomePageComponent,

    ParcelsPageComponent,
    EquipementsPageComponent,
    ContactPageComponent,
    AboutusPageComponent,
    EquipementCataloguePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    EquipementModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    HomePageComponent,
    ParcelsPageComponent,
    EquipementsPageComponent,
    ContactPageComponent,
    AboutusPageComponent
  ]
})
export class LayoutModule { }
