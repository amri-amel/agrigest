import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementCatalogueContainerComponent } from './equipement-catalogue-container.component';

describe('EquipementCatalogueContainerComponent', () => {
  let component: EquipementCatalogueContainerComponent;
  let fixture: ComponentFixture<EquipementCatalogueContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipementCatalogueContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipementCatalogueContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
