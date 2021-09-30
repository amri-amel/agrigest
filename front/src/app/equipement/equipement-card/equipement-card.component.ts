import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipement-card',
  templateUrl: './equipement-card.component.html',
  styleUrls: ['./equipement-card.component.scss']
})
export class EquipementCardComponent implements OnInit {
  @Input() equipement:any;
  constructor() { }

  ngOnInit(): void {
  }

}
