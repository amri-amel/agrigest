import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';
import { EquipementModule } from './equipement/equipement.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    LayoutModule,
    EquipementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
