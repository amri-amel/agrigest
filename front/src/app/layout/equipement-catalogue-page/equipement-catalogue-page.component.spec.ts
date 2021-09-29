import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementCataloguePageComponent } from './equipement-catalogue-page.component';

describe('EquipementCataloguePageComponent', () => {
  let component: EquipementCataloguePageComponent;
  let fixture: ComponentFixture<EquipementCataloguePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipementCataloguePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipementCataloguePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
