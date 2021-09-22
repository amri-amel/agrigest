import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-list-equipement',
  templateUrl: './list-equipement.component.html',
  styleUrls: ['./list-equipement.component.scss']
})
export class ListEquipementComponent implements OnInit,AfterViewInit  {
  public displayedColumns: string[] = [
    'id', 'designation','type' ,'brand', 'price'
  ];
  public dataSource = new MatTableDataSource();
  public equipments:any;

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/eqipements').subscribe(
      {
        next:(data)=>{
          this.equipments=data;
          this.dataSource=this.equipments;
          console.log(this.equipments)
        },
        error:(error)=>{
          alert(`Error: ${JSON.stringify(error)}`)
        },
        complete:()=>console.log('get all equipements completed')
      }
    )
  }



  ngAfterViewInit() {

  }

}

function ViewChild(MatSort: any) {
  throw new Error('Function not implemented.');
}

function MatSort(MatSort: any) {
  throw new Error('Function not implemented.');
}

