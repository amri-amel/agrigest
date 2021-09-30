import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EquipementService } from '../equipement.service';


@Component({
  selector: 'app-list-equipement',
  templateUrl: './list-equipement.component.html',
  styleUrls: ['./list-equipement.component.scss']
})
export class ListEquipementComponent implements OnInit,AfterViewInit  {
  public displayedColumns: string[] = [
    'id', 'designation','type' ,'brand', 'price','actions'
  ];
  public dataSource = new MatTableDataSource();

  constructor(private equipementService:EquipementService) {

  }

  ngOnInit(): void {
    this.getAllEquipement()
  }

  getAllEquipement(){
    this.equipementService.getAllEquipements().subscribe(
      {
        next:(data)=>{
          this.dataSource=data;
        },
        error:(error)=>{
          alert(`Error: ${JSON.stringify(error)}`)
        },
        complete:()=>console.log('get all equipements completed')
      }
    )
  }

  addEquipementHandler($event:any){
    console.log($event);
    this.getAllEquipement();
  }


  ngAfterViewInit() {

  }

  deleteEquipement(equipement:any){
        console.log(equipement)
  }

  updateEquipement(equipement:any){
    console.log(equipement)
}

}

function ViewChild(MatSort: any) {
  throw new Error('Function not implemented.');
}

function MatSort(MatSort: any) {
  throw new Error('Function not implemented.');
}

