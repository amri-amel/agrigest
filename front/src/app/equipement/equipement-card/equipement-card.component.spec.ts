import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementCardComponent } from './equipement-card.component';

describe('EquipementCardComponent', () => {
  let component: EquipementCardComponent;
  let fixture: ComponentFixture<EquipementCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipementCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipementCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
