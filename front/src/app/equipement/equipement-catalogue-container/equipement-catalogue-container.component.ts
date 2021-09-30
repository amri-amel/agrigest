import { Component, OnInit } from '@angular/core';
import { EquipementService } from '../equipement.service';

@Component({
  selector: 'catalogue-container',
  templateUrl: './equipement-catalogue-container.component.html',
  styleUrls: ['./equipement-catalogue-container.component.scss']
})
export class EquipementCatalogueContainerComponent implements OnInit {
  public equipements:any;
  constructor(private equipementService:EquipementService) { }

  ngOnInit(): void {
      this.equipementService.getAllEquipements()
      .subscribe( data=> this.equipements=data)
  }

}
