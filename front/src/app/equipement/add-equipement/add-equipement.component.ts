import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-equipement',
  templateUrl: './add-equipement.component.html',
  styleUrls: ['./add-equipement.component.scss']
})
export class AddEquipementComponent implements OnInit {
  equipementForm:any;
  public brands=['Marceds','ELJEDDA3','ALAIN']
  types=['Tracteur','Traxe','Insecticides']

  constructor(private fb:FormBuilder,
    private http:HttpClient ) { }

  ngOnInit(): void {
        this.equipementForm=this.fb.group({
          designation:[''],
          type:[''],
          brand:[''],
          price:[0]
        })
  }

  submitEquipement(){
    this.http.post('http://localhost:3000/eqipements',this.equipementForm.value)
    .subscribe({
      next:(data)=>console.log(data),
      error:(error=>console.log(error)),
      complete:()=>alert('product added successfully')


    })

  }

}
