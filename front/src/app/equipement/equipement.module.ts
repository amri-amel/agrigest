import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEquipementComponent } from './add-equipement/add-equipement.component';
import { ListEquipementComponent } from './list-equipement/list-equipement.component';
import { UpdateEquipementComponent } from './update-equipement/update-equipement.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EquipementCatalogueContainerComponent } from './equipement-catalogue-container/equipement-catalogue-container.component';
import { EquipementCardComponent } from './equipement-card/equipement-card.component';



@NgModule({
  declarations: [
    AddEquipementComponent,
    ListEquipementComponent,
    UpdateEquipementComponent,
    EquipementCatalogueContainerComponent,
    EquipementCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    ListEquipementComponent,
    UpdateEquipementComponent,
    AddEquipementComponent,
  ]
})
export class EquipementModule { }
