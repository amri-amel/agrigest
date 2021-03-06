import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { EquipementService } from '../equipement.service';

@Component({
  selector: 'app-add-equipement',
  templateUrl: './add-equipement.component.html',
  styleUrls: ['./add-equipement.component.scss']
})
export class AddEquipementComponent implements OnInit {
  @Output() onAddEquipement:EventEmitter<any>=new EventEmitter<any>();
  equipementForm:any;
  public brands=['Marceds','ELJEDDA3','ALAIN']
  types=['Tracteur','Traxe','Insecticides']

  constructor(private fb:FormBuilder,
    private equipementService:EquipementService ) { }

  ngOnInit(): void {
        this.equipementForm=this.fb.group({
          designation:[''],
          type:[''],
          brand:[''],
          price:[0]
        })
  }

  submitEquipement(){
   this.equipementService.sendEquipement(this.equipementForm.value)
    .subscribe({
      next:(data)=>console.log(data),
      error:(error=>console.log(error)),
      complete:()=>alert('product added successfully')


    })
   this.onAddEquipement.emit('Ahhhhhaaaaa :)')
  }


}
