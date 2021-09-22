import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEquipementComponent } from './add-equipement/add-equipement.component';
import { ListEquipementComponent } from './list-equipement/list-equipement.component';
import { UpdateEquipementComponent } from './update-equipement/update-equipement.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddEquipementComponent,
    ListEquipementComponent,
    UpdateEquipementComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ListEquipementComponent,
    UpdateEquipementComponent,
    AddEquipementComponent,
  ]
})
export class EquipementModule { }
